import { assert, debounce, nonNull } from "~/util";

export interface AnimationData {
  skip: () => void;
  initial: () => void | Promise<void>;
  start: () => void | Promise<void>;
}

type Task = {
  canRun: () => boolean;
  run: () => void | Promise<void>;
};

const queue: Task[] = [];
const speed = 50;
let queueTimeout: NodeJS.Timeout | null = null;
let isTransitioning = false;

function enqueue(task: Task) {
  queue.push(task);
  if (queueTimeout !== null) return;

  function start(timeout: number) {
    queueTimeout = setTimeout(process, timeout);
  }

  function process() {
    queueTimeout = null;
    const task = queue.shift();
    if (task === undefined) return;

    const canRun = task.canRun();
    if (canRun) {
      void task.run();
    }

    start(queue.length > 10 || !canRun ? 0 : speed);
  }

  start(speed);
}

class Animation {
  private _skipped = false;
  private _initialized = false;
  private _started = false;
  private _initializing: Promise<void> | null = null;
  private _skip: AnimationData["skip"];
  private _initial: AnimationData["initial"];
  private _start: AnimationData["start"];

  constructor({ skip, initial, start }: AnimationData) {
    this._skip = skip;
    this._initial = initial;
    this._start = start;
  }

  async initialize() {
    assert(!this._initialized, "Already initialized.");
    assert(!this._skipped, "Animation skipped.");
    assert(this._initializing === null, "_initializing is not null.");
    this._initialized = true;
    this._initializing = (async () => this._initial())();
    await this._initializing;
  }

  async start() {
    assert(!this._started, "Already started.");
    assert(!this._skipped, "Animation skipped.");
    assert(this._initialized, "Not initialized.");
    await this._initializing;
    this._started = true;
    await this._start();
  }

  skip() {
    assert(!this._skipped, "Already skipped.");
    assert(
      !this._initialized && !this._started,
      "Animation initialized or started.",
    );
    this._skipped = true;
    this._skip();
  }
}

const animations = new Map<Element, Animation>();
const intersections = new Set<Element>();
let observer: IntersectionObserver | null = null;
let initial = true;

const processEntries = debounce(() => {
  const obs = nonNull(observer);

  if (initial) {
    initial = false;

    for (const [target, animation] of animations) {
      if (intersections.has(target)) {
        // skip intersecting animations
        animation.skip();
        animations.delete(target);
        obs.unobserve(target);
      } else {
        // initialize all other animations
        void animation.initialize();
      }
    }

    intersections.clear();
    return;
  }

  if (isTransitioning) return;

  // order intersections
  let orderedIntersections: Element[];
  {
    const sorted = [...intersections]
      .map((x) => [x, x.getBoundingClientRect()] as const)
      .sort(([, a], [, b]) => a.top - b.top);
    const rows: [Element, number][][] = [];
    {
      // add rows
      let last: number | null = null;
      for (const [target, rect] of sorted) {
        if (last === null) {
          rows.push([[target, rect.left]]);
        } else if (last === rect.top) {
          rows[rows.length - 1].push([target, rect.left]);
        } else {
          rows.push([[target, rect.left]]);
        }
        last = rect.top;
      }
      // sort rows
      for (const row of rows) {
        row.sort(([, a], [, b]) => a - b);
      }
    }
    orderedIntersections = rows.flat().map(([x]) => x);
  }

  // start intersecting animations
  for (const target of orderedIntersections) {
    enqueue({
      canRun: () => animations.has(target),
      run: async () => {
        const animation = animations.get(target);
        await animation?.start();
        animations.delete(target);
      },
    });
    obs.unobserve(target);
  }

  intersections.clear();
}, 10);

if (typeof window !== "undefined") {
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        intersections.add(entry.target);
      }
    }
    processEntries();
  });
}

export function observeTarget(target: Element, data: AnimationData): boolean {
  if (animations.has(target)) return false;
  const animation = new Animation(data);
  // skip if above the viewport
  const rect = target.getBoundingClientRect();
  if (rect.y + rect.height < 0) {
    animation.skip();
    return false;
  }
  // initialize immediately if not initial load
  if (!initial) void animation.initialize();
  animations.set(target, animation);
  nonNull(observer).observe(target);
  return true;
}

export function unobserveTarget(target: Element) {
  animations.delete(target);
  nonNull(observer).unobserve(target);
}

export function setTransitioning(value: boolean) {
  isTransitioning = value;
  if (!value) processEntries();
}
