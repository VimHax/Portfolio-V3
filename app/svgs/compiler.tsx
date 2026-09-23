import type { SVGProps } from "react";

const CompilerSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="compiler_diagram"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="flowchart"
    style={{
      maxWidth: "587.638px",
      backgroundColor: "transparent",
    }}
    viewBox="43 43 587.637573242 637.599975586"
    role="graphics-document document"
    aria-roledescription="flowchart-v2"
    {...props}
  >
    <style>
      {
        '#compiler_diagram{font-family:"jetbrains-mono";font-size:16px;fill:#f5f5ff;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#compiler_diagram .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#compiler_diagram .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#compiler_diagram .error-icon{fill:hsl(25.8461538462, 84.4155844156%, 89.9019607843%);}#compiler_diagram .error-text{fill:rgb(4.012987013, 28.7597402597, 47.4870129871);stroke:rgb(4.012987013, 28.7597402597, 47.4870129871);}#compiler_diagram .edge-thickness-normal{stroke-width:1px;}#compiler_diagram .edge-thickness-thick{stroke-width:3.5px;}#compiler_diagram .edge-pattern-solid{stroke-dasharray:0;}#compiler_diagram .edge-thickness-invisible{stroke-width:0;fill:none;}#compiler_diagram .edge-pattern-dashed{stroke-dasharray:3;}#compiler_diagram .edge-pattern-dotted{stroke-dasharray:2;}#compiler_diagram .marker{fill:#005180;stroke:#005180;}#compiler_diagram .marker.cross{stroke:#005180;}#compiler_diagram svg{font-family:"jetbrains-mono";font-size:16px;}#compiler_diagram p{margin:0;}#compiler_diagram .label{font-family:"jetbrains-mono";color:#00001f;}#compiler_diagram .cluster-label text{fill:rgb(4.012987013, 28.7597402597, 47.4870129871);}#compiler_diagram .cluster-label span{color:rgb(4.012987013, 28.7597402597, 47.4870129871);}#compiler_diagram .cluster-label span p{background-color:transparent;}#compiler_diagram .label text,#compiler_diagram span{fill:#00001f;color:#00001f;}#compiler_diagram .node rect,#compiler_diagram .node circle,#compiler_diagram .node ellipse,#compiler_diagram .node polygon,#compiler_diagram .node path{fill:#b8ddf9;stroke:#00000000;stroke-width:1px;}#compiler_diagram .rough-node .label text,#compiler_diagram .node .label text,#compiler_diagram .image-shape .label,#compiler_diagram .icon-shape .label{text-anchor:middle;}#compiler_diagram .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#compiler_diagram .rough-node .label,#compiler_diagram .node .label,#compiler_diagram .image-shape .label,#compiler_diagram .icon-shape .label{text-align:center;}#compiler_diagram .node.clickable{cursor:pointer;}#compiler_diagram .root .anchor path{fill:#005180!important;stroke-width:0;stroke:#005180;}#compiler_diagram .arrowheadPath{fill:#0b0b0b;}#compiler_diagram .edgePaths .path{stroke:#005180;stroke-width:1px;}#compiler_diagram .flowchart-link{stroke:#005180;fill:none;}#compiler_diagram .edgeLabel{background-color:#d6e8fc;text-align:center;}#compiler_diagram .edgeLabel p{background-color:#d6e8fc;}#compiler_diagram .edgeLabel rect{background-color:#d6e8fc;fill:#d6e8fc;}#compiler_diagram .labelBkg{background-color:rgba(214, 232, 252, 0.5);}#compiler_diagram .cluster rect{fill:#e9f0fe;stroke:#00000000;stroke-width:1px;}#compiler_diagram .cluster text{fill:rgb(4.012987013, 28.7597402597, 47.4870129871);}#compiler_diagram .cluster span{color:rgb(4.012987013, 28.7597402597, 47.4870129871);}#compiler_diagram .node .collapsed-indicator{fill:#00000000;stroke:none;opacity:0.6;}#compiler_diagram .node .collapsed-separator{stroke:#00000000;stroke-width:0.75px;}#compiler_diagram div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"jetbrains-mono";font-size:12px;background:hsl(25.8461538462, 84.4155844156%, 89.9019607843%);border:1px solid hsl(25.8461538462, 44.4155844156%, 79.9019607843%);border-radius:2px;pointer-events:none;z-index:100;}#compiler_diagram .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#f5f5ff;}#compiler_diagram rect.text{fill:none;stroke-width:0;}#compiler_diagram .icon-shape,#compiler_diagram .image-shape{background-color:#d6e8fc;text-align:center;}#compiler_diagram .icon-shape p,#compiler_diagram .image-shape p{background-color:#d6e8fc;padding:2px;}#compiler_diagram .icon-shape .label rect,#compiler_diagram .image-shape .label rect{opacity:0.5;background-color:#d6e8fc;fill:#d6e8fc;}#compiler_diagram .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#compiler_diagram .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#compiler_diagram .node .neo-node{stroke:#00000000;}#compiler_diagram [data-look="neo"].node rect,#compiler_diagram [data-look="neo"].cluster rect,#compiler_diagram [data-look="neo"].node polygon{stroke:url(#compiler_diagram-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#compiler_diagram [data-look="neo"].swimlane.cluster rect{filter:none;}#compiler_diagram [data-look="neo"].node path{stroke:url(#compiler_diagram-gradient);stroke-width:1px;}#compiler_diagram [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#compiler_diagram [data-look="neo"].node .neo-line path{stroke:#00000000;filter:none;}#compiler_diagram [data-look="neo"].node circle{stroke:url(#compiler_diagram-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#compiler_diagram [data-look="neo"].node circle .state-start{fill:#000000;}#compiler_diagram [data-look="neo"].icon-shape .icon{fill:url(#compiler_diagram-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#compiler_diagram [data-look="neo"].icon-shape .icon-neo path{stroke:url(#compiler_diagram-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}'
      }
    </style>
    <g>
      <marker
        id="compiler_diagram_flowchart-v2-pointEnd"
        className="marker flowchart-v2"
        viewBox="0 0 10 10"
        refX={5}
        refY={5}
        markerUnits="userSpaceOnUse"
        markerWidth={8}
        markerHeight={8}
        orient="auto"
      >
        <path
          d="M 0 0 L 10 5 L 0 10 z"
          className="arrowMarkerPath"
          style={{
            strokeWidth: 1,
            strokeDasharray: "1, 0",
          }}
        />
      </marker>
      <marker
        id="compiler_diagram_flowchart-v2-pointStart"
        className="marker flowchart-v2"
        viewBox="0 0 10 10"
        refX={4.5}
        refY={5}
        markerUnits="userSpaceOnUse"
        markerWidth={8}
        markerHeight={8}
        orient="auto"
      >
        <path
          d="M 0 5 L 10 10 L 10 0 z"
          className="arrowMarkerPath"
          style={{
            strokeWidth: 1,
            strokeDasharray: "1, 0",
          }}
        />
      </marker>
      <marker
        id="compiler_diagram_flowchart-v2-pointEnd-margin"
        className="marker flowchart-v2"
        viewBox="0 0 11.5 14"
        refX={11.5}
        refY={7}
        markerUnits="userSpaceOnUse"
        markerWidth={10.5}
        markerHeight={14}
        orient="auto"
      >
        <path
          d="M 0 0 L 11.5 7 L 0 14 z"
          className="arrowMarkerPath"
          style={{
            strokeWidth: 0,
            strokeDasharray: "1, 0",
          }}
        />
      </marker>
      <marker
        id="compiler_diagram_flowchart-v2-pointStart-margin"
        className="marker flowchart-v2"
        viewBox="0 0 11.5 14"
        refX={1}
        refY={7}
        markerUnits="userSpaceOnUse"
        markerWidth={11.5}
        markerHeight={14}
        orient="auto"
      >
        <polygon
          points="0,7 11.5,14 11.5,0"
          className="arrowMarkerPath"
          style={{
            strokeWidth: 0,
            strokeDasharray: "1, 0",
          }}
        />
      </marker>
      <marker
        id="compiler_diagram_flowchart-v2-circleEnd"
        className="marker flowchart-v2"
        viewBox="0 0 10 10"
        refX={11}
        refY={5}
        markerUnits="userSpaceOnUse"
        markerWidth={11}
        markerHeight={11}
        orient="auto"
      >
        <circle
          cx={5}
          cy={5}
          r={5}
          className="arrowMarkerPath"
          style={{
            strokeWidth: 1,
            strokeDasharray: "1, 0",
          }}
        />
      </marker>
      <marker
        id="compiler_diagram_flowchart-v2-circleStart"
        className="marker flowchart-v2"
        viewBox="0 0 10 10"
        refX={-1}
        refY={5}
        markerUnits="userSpaceOnUse"
        markerWidth={11}
        markerHeight={11}
        orient="auto"
      >
        <circle
          cx={5}
          cy={5}
          r={5}
          className="arrowMarkerPath"
          style={{
            strokeWidth: 1,
            strokeDasharray: "1, 0",
          }}
        />
      </marker>
      <marker
        id="compiler_diagram_flowchart-v2-circleEnd-margin"
        className="marker flowchart-v2"
        viewBox="0 0 10 10"
        refY={5}
        refX={12.25}
        markerUnits="userSpaceOnUse"
        markerWidth={14}
        markerHeight={14}
        orient="auto"
      >
        <circle
          cx={5}
          cy={5}
          r={5}
          className="arrowMarkerPath"
          style={{
            strokeWidth: 0,
            strokeDasharray: "1, 0",
          }}
        />
      </marker>
      <marker
        id="compiler_diagram_flowchart-v2-circleStart-margin"
        className="marker flowchart-v2"
        viewBox="0 0 10 10"
        refX={-2}
        refY={5}
        markerUnits="userSpaceOnUse"
        markerWidth={14}
        markerHeight={14}
        orient="auto"
      >
        <circle
          cx={5}
          cy={5}
          r={5}
          className="arrowMarkerPath"
          style={{
            strokeWidth: 0,
            strokeDasharray: "1, 0",
          }}
        />
      </marker>
      <marker
        id="compiler_diagram_flowchart-v2-crossEnd"
        className="marker cross flowchart-v2"
        viewBox="0 0 11 11"
        refX={12}
        refY={5.2}
        markerUnits="userSpaceOnUse"
        markerWidth={11}
        markerHeight={11}
        orient="auto"
      >
        <path
          d="M 1,1 l 9,9 M 10,1 l -9,9"
          className="arrowMarkerPath"
          style={{
            strokeWidth: 2,
            strokeDasharray: "1, 0",
          }}
        />
      </marker>
      <marker
        id="compiler_diagram_flowchart-v2-crossStart"
        className="marker cross flowchart-v2"
        viewBox="0 0 11 11"
        refX={-1}
        refY={5.2}
        markerUnits="userSpaceOnUse"
        markerWidth={11}
        markerHeight={11}
        orient="auto"
      >
        <path
          d="M 1,1 l 9,9 M 10,1 l -9,9"
          className="arrowMarkerPath"
          style={{
            strokeWidth: 2,
            strokeDasharray: "1, 0",
          }}
        />
      </marker>
      <marker
        id="compiler_diagram_flowchart-v2-crossEnd-margin"
        className="marker cross flowchart-v2"
        viewBox="0 0 15 15"
        refX={17.7}
        refY={7.5}
        markerUnits="userSpaceOnUse"
        markerWidth={12}
        markerHeight={12}
        orient="auto"
      >
        <path
          d="M 1,1 L 14,14 M 1,14 L 14,1"
          className="arrowMarkerPath"
          style={{
            strokeWidth: 2.5,
          }}
        />
      </marker>
      <marker
        id="compiler_diagram_flowchart-v2-crossStart-margin"
        className="marker cross flowchart-v2"
        viewBox="0 0 15 15"
        refX={-3.5}
        refY={7.5}
        markerUnits="userSpaceOnUse"
        markerWidth={12}
        markerHeight={12}
        orient="auto"
      >
        <path
          d="M 1,1 L 14,14 M 1,14 L 14,1"
          className="arrowMarkerPath"
          style={{
            strokeWidth: 2.5,
            strokeDasharray: "1, 0",
          }}
        />
      </marker>
      <g className="root">
        <g className="clusters" />
        <g className="edgePaths" transform="translate(5 8)">
          <path
            d="M202.5 557L321.24 557C325.958 557 328.316 555.289 328.316 551.867V533.408V426.917V320.426V181.417V71.1329C328.316 67.711 330.675 66 335.393 66H445.5"
            id="compiler_diagram-e4"
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
            style={{}}
            data-edge="true"
            data-et="edge"
            data-id="e4"
            data-points="W3sieCI6Mjk1LjIxODc1LCJ5IjozNjEuNzk5OTg3NzkyOTY4NzV9LHsieCI6MzM2LjgxODc3MTM2MjMwNDcsInkiOjM2MS43OTk5ODc3OTI5Njg3NX0seyJ4IjozNzguNDE4NzkyNzI0NjA5NCwieSI6MzYxLjc5OTk4Nzc5Mjk2ODc1fV0="
            data-look="classic"
            markerEnd="url(#compiler_diagram_flowchart-v2-pointEnd)"
          />
        </g>
        <g className="edgeLabels" transform="translate(-3 -40)">
          <g
            className="edgeLabel"
            transform="translate(336.8187713623047, 361.79998779296875)"
          >
            <g
              className="label"
              data-id="e4"
              transform="translate(-0.1937713623046875, -10.5)"
            >
              <g>
                <rect
                  className="background"
                  style={{}}
                  x={-16.40625}
                  y={-2}
                  width={33.200042724609375}
                  height={25}
                />
                <text y={-10.1} textAnchor="middle" style={{}}>
                  <tspan
                    className="text-outer-tspan row"
                    x={0}
                    y="-0.1em"
                    dy="1.1em"
                    textAnchor="middle"
                  >
                    <tspan
                      fontStyle="italic"
                      className="text-inner-tspan"
                      fontWeight="normal"
                    >
                      {"AST"}
                    </tspan>
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </g>
        <g className="nodes">
          <g className="root" transform="translate(370.4187927246094, 0)">
            <g className="edgePaths">
              <path
                d="M151.609,99.5L151.609,107.833C151.609,116.167,151.609,132.833,151.609,148.833C151.609,164.833,151.609,180.167,151.609,187.833L151.609,195.5"
                id="compiler_diagram-e5"
                className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
                style={{}}
                data-edge="true"
                data-et="edge"
                data-id="e5"
                data-points="W3sieCI6MTUxLjYwOTM3NSwieSI6OTkuNX0seyJ4IjoxNTEuNjA5Mzc1LCJ5IjoxNDkuNX0seyJ4IjoxNTEuNjA5Mzc1LCJ5IjoxOTkuNX1d"
                data-look="classic"
                markerEnd="url(#compiler_diagram_flowchart-v2-pointEnd)"
              />
              <path
                d="M151.609,253.5L151.609,263.3C151.609,273.1,151.609,292.7,151.609,311.633C151.609,330.567,151.609,348.833,151.609,357.967L151.609,367.1"
                id="compiler_diagram-e7"
                className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
                style={{}}
                data-edge="true"
                data-et="edge"
                data-id="e7"
                data-points="W3sieCI6MTUxLjYwOTM3NSwieSI6MjUzLjV9LHsieCI6MTUxLjYwOTM3NSwieSI6MzEyLjI5OTk5OTIzNzA2MDU1fSx7IngiOjE1MS42MDkzNzUsInkiOjM3MS4wOTk5OTg0NzQxMjExfV0="
                data-look="classic"
                markerEnd="url(#compiler_diagram_flowchart-v2-pointEnd)"
              />
              <path
                d="M151.609,425.1L151.609,433.433C151.609,441.767,151.609,458.433,151.686,474.517C151.763,490.6,151.916,506.1,151.993,513.85L152.07,521.6"
                id="compiler_diagram-e6"
                className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
                style={{}}
                data-edge="true"
                data-et="edge"
                data-id="e6"
                data-points="W3sieCI6MTUxLjYwOTM3NSwieSI6NDI1LjA5OTk5ODQ3NDEyMTF9LHsieCI6MTUxLjYwOTM3NSwieSI6NDc1LjA5OTk5ODQ3NDEyMTF9LHsieCI6MTUyLjEwOTM3NSwieSI6NTI1LjU5OTk5ODQ3NDEyMTF9XQ=="
                data-look="classic"
                markerEnd="url(#compiler_diagram_flowchart-v2-pointEnd)"
              />
              <path
                d="M152.109,564.6L152.026,570.767C151.943,576.933,151.776,589.267,151.767,601.1C151.758,612.933,151.908,624.267,151.982,629.934L152.057,635.6"
                id="compiler_diagram-e8"
                className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
                style={{}}
                data-edge="true"
                data-et="edge"
                data-id="e8"
                data-points="W3sieCI6MTUyLjEwOTM3NSwieSI6NTY0LjU5OTk5ODQ3NDEyMTF9LHsieCI6MTUxLjYwOTM3NSwieSI6NjAxLjU5OTk5ODQ3NDEyMTF9LHsieCI6MTUyLjEwOTM3NSwieSI6NjM5LjU5OTk5ODQ3NDEyMTF9XQ=="
                data-look="classic"
                markerEnd="url(#compiler_diagram_flowchart-v2-pointEnd)"
              />
            </g>
            <g className="edgeLabels">
              <g className="edgeLabel" transform="translate(151.609375, 149.5)">
                <g
                  className="label"
                  data-id="e5"
                  transform="translate(0, -10.5)"
                >
                  <g>
                    <rect
                      className="background"
                      style={{}}
                      x={-78.8203125}
                      y={-2}
                      width={157.640625}
                      height={25}
                    />
                    <text y={-10.1} textAnchor="middle" style={{}}>
                      <tspan
                        className="text-outer-tspan row"
                        x={0}
                        y="-0.1em"
                        dy="1.1em"
                        textAnchor="middle"
                      >
                        <tspan
                          fontStyle="italic"
                          className="text-inner-tspan"
                          fontWeight="normal"
                        >
                          {"AST"}
                        </tspan>
                        <tspan
                          fontStyle="italic"
                          className="text-inner-tspan"
                          fontWeight="normal"
                        >
                          {" +"}
                        </tspan>
                        <tspan
                          fontStyle="italic"
                          className="text-inner-tspan"
                          fontWeight="normal"
                        >
                          {" Data"}
                        </tspan>
                        <tspan
                          fontStyle="italic"
                          className="text-inner-tspan"
                          fontWeight="normal"
                        >
                          {" Types"}
                        </tspan>
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <g
                className="edgeLabel"
                transform="translate(151.609375, 312.29999923706055)"
              >
                <g
                  className="label"
                  data-id="e7"
                  transform="translate(-0.19696044921875, -19.299999237060547)"
                >
                  <g>
                    <rect
                      className="background"
                      style={{}}
                      x={-88.4140625}
                      y={-2}
                      width={177.2220458984375}
                      height={42.599998474121094}
                    />
                    <text y={-10.1} textAnchor="middle" style={{}}>
                      <tspan
                        className="text-outer-tspan row"
                        x={0}
                        y="-0.1em"
                        dy="1.1em"
                        textAnchor="middle"
                      >
                        <tspan
                          fontStyle="italic"
                          className="text-inner-tspan"
                          fontWeight="normal"
                        >
                          {"LLVM"}
                        </tspan>
                        <tspan
                          fontStyle="italic"
                          className="text-inner-tspan"
                          fontWeight="normal"
                        >
                          {" IR"}
                        </tspan>
                        <tspan
                          fontStyle="italic"
                          className="text-inner-tspan"
                          fontWeight="normal"
                        >
                          {" +"}
                        </tspan>
                        <tspan
                          fontStyle="italic"
                          className="text-inner-tspan"
                          fontWeight="normal"
                        >
                          {" Standard"}
                        </tspan>
                      </tspan>
                      <tspan
                        className="text-outer-tspan row"
                        x={0}
                        y="1em"
                        dy="1.1em"
                        textAnchor="middle"
                      >
                        <tspan
                          fontStyle="italic"
                          className="text-inner-tspan"
                          fontWeight="normal"
                        >
                          {"Library"}
                        </tspan>
                        <tspan
                          fontStyle="italic"
                          className="text-inner-tspan"
                          fontWeight="normal"
                        >
                          {" (in"}
                        </tspan>
                        <tspan
                          fontStyle="italic"
                          className="text-inner-tspan"
                          fontWeight="normal"
                        >
                          {" C)"}
                        </tspan>
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <g
                className="edgeLabel"
                transform="translate(151.609375, 475.0999984741211)"
              >
                <g
                  className="label"
                  data-id="e6"
                  transform="translate(0, -10.5)"
                >
                  <g>
                    <rect
                      className="background"
                      style={{}}
                      x={-59.609375}
                      y={-2}
                      width={119.21875}
                      height={25}
                    />
                    <text y={-10.1} textAnchor="middle" style={{}}>
                      <tspan
                        className="text-outer-tspan row"
                        x={0}
                        y="-0.1em"
                        dy="1.1em"
                        textAnchor="middle"
                      >
                        <tspan
                          fontStyle="normal"
                          className="text-inner-tspan"
                          fontWeight="normal"
                        >
                          {"Machine"}
                        </tspan>
                        <tspan
                          fontStyle="normal"
                          className="text-inner-tspan"
                          fontWeight="normal"
                        >
                          {" Code"}
                        </tspan>
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <g className="edgeLabel">
                <g className="label" data-id="e8" transform="translate(0, 0)">
                  <text y={-10.1} textAnchor="middle">
                    <tspan
                      className="text-outer-tspan row"
                      x={0}
                      y="-0.1em"
                      dy="1.1em"
                      textAnchor="middle"
                    />
                  </text>
                </g>
              </g>
              <g>
                <rect
                  className="background"
                  style={{
                    stroke: "none",
                  }}
                />
              </g>
            </g>
            <g className="nodes">
              <g
                className="node default"
                id="compiler_diagram-flowchart-analyzer-10"
                data-look="classic"
                transform="translate(151.609375, 72.5)"
              >
                <rect
                  className="basic label-container"
                  style={{}}
                  x={-68.40625}
                  y={-27}
                  width={136.8125}
                  height={54}
                />
                <g
                  className="label"
                  style={{}}
                  transform="translate(-38.40625, -12)"
                >
                  <rect />
                  <foreignObject width={76.8125} height={24}>
                    <div
                      style={{
                        display: "table-cell",
                        whiteSpace: "nowrap",
                        lineHeight: 1.5,
                        maxWidth: 200,
                        textAlign: "center",
                      }}
                    >
                      <span className="nodeLabel markdown-node-label">
                        <p>{"Analyzer"}</p>
                      </span>
                    </div>
                  </foreignObject>
                </g>
              </g>
              <g
                className="node default"
                id="compiler_diagram-flowchart-codegen-11"
                data-look="classic"
                transform="translate(151.609375, 226.5)"
              >
                <rect
                  className="basic label-container"
                  style={{}}
                  x={-97.203125}
                  y={-27}
                  width={194.40625}
                  height={54}
                />
                <g
                  className="label"
                  style={{}}
                  transform="translate(-67.203125, -12)"
                >
                  <rect />
                  <foreignObject width={134.40625} height={24}>
                    <div
                      style={{
                        display: "table-cell",
                        whiteSpace: "nowrap",
                        lineHeight: 1.5,
                        maxWidth: 200,
                        textAlign: "center",
                      }}
                    >
                      <span className="nodeLabel markdown-node-label">
                        <p>{"Code Generator"}</p>
                      </span>
                    </div>
                  </foreignObject>
                </g>
              </g>
              <g
                className="node default"
                id="compiler_diagram-flowchart-clang-12"
                data-look="classic"
                transform="translate(151.609375, 398.0999984741211)"
              >
                <rect
                  className="basic label-container"
                  style={{}}
                  x={-54.0078125}
                  y={-27}
                  width={108.015625}
                  height={54}
                />
                <g
                  className="label"
                  style={{}}
                  transform="translate(-24.0078125, -12)"
                >
                  <rect />
                  <foreignObject width={48.015625} height={24}>
                    <div
                      style={{
                        display: "table-cell",
                        whiteSpace: "nowrap",
                        lineHeight: 1.5,
                        maxWidth: 200,
                        textAlign: "center",
                      }}
                    >
                      <span className="nodeLabel markdown-node-label">
                        <p>{"Clang"}</p>
                      </span>
                    </div>
                  </foreignObject>
                </g>
              </g>
              <g
                className="node default"
                id="compiler_diagram-flowchart-executable-14"
                data-look="classic"
                transform="translate(151.609375, 544.5999984741211)"
              >
                <polygon
                  points="-19.5,0 178.21875,0 197.71875,-39 0,-39"
                  className="label-container"
                  transform="translate(-89.109375,19.5)"
                />
                <g
                  className="label"
                  style={{}}
                  transform="translate(-81.609375, -12)"
                >
                  <rect />
                  <foreignObject width={163.21875} height={24}>
                    <div
                      style={{
                        display: "table-cell",
                        whiteSpace: "nowrap",
                        lineHeight: 1.5,
                        maxWidth: 200,
                        textAlign: "center",
                      }}
                    >
                      <span className="nodeLabel markdown-node-label">
                        <p>
                          <em>{"OUTPUT"}</em>
                          {" Executable"}
                        </p>
                      </span>
                    </div>
                  </foreignObject>
                </g>
              </g>
              <g
                className="node default"
                id="compiler_diagram-flowchart-stop-13"
                data-look="classic"
                transform="translate(151.609375, 658.5999984741211)"
              >
                <g className="basic label-container outer-path">
                  <path
                    d="M-12.078125 -19.5 C-2.5245329142027657 -19.5, 7.029059171594469 -19.5, 12.078125 -19.5 C12.078125 -19.5, 12.078124999999998 -19.5, 12.078124999999998 -19.5 C12.533331066936896 -19.485402427438192, 12.988537133873795 -19.470804854876384, 13.3274942896239 -19.45993515863156 C13.820399891873835 -19.412385147988225, 14.31330549412377 -19.36483513734489, 14.571729652847864 -19.3399052695533 C14.877409652018159 -19.290485297871246, 15.183089651188451 -19.24106532618919, 15.805718259676757 -19.140403561325776 C16.144520897509853 -19.063074070134203, 16.48332353534295 -18.98574457894263, 17.02438938623539 -18.862249829261074 C17.43918865583608 -18.739139583369386, 17.853987925436773 -18.6160293374777, 18.222735251460602 -18.50658706670804 C18.5996292935476 -18.367886575249692, 18.976523335634596 -18.229186083791344, 19.395831595147794 -18.074876768247425 C19.629924411802346 -17.971250822431134, 19.8640172284569 -17.867624876614848, 20.53885791279238 -17.568892924097174 C20.77616657312088 -17.44508914800725, 21.013475233449377 -17.321285371917323, 21.647117264076783 -16.990714730406097 C22.05292102307158 -16.744714106935856, 22.458724782066376 -16.498713483465615, 22.716055573605697 -16.342718045390892 C23.01696093630853 -16.132819490352606, 23.31786629901136 -15.922920935314322, 23.741280344578712 -15.627565626425154 C23.999594737185284 -15.421566772356092, 24.25790912979185 -15.215567918287032, 24.71857870850187 -14.848196188198123 C25.022977869767125 -14.571748923897482, 25.32737703103238 -14.295301659596843, 25.643934736767985 -14.007812326905688 C25.93181145702543 -13.71055597812159, 26.219688177282872 -13.413299629337493, 26.513545942968648 -13.10986736009568 C26.81240387173506 -12.758811831468762, 27.111261800501477 -12.407756302841841, 27.323838908126582 -12.158051136245305 C27.488203088053712 -11.937818109027782, 27.652567267980842 -11.71758508181026, 28.071483964640635 -11.156274872382312 C28.326357190239886 -10.76472115481786, 28.581230415839137 -10.373167437253407, 28.753408878604247 -10.108655082055241 C28.992154475503458 -9.684738099147493, 29.23090007240267 -9.260821116239745, 29.3668114742735 -9.019496659696287 C29.479930075324173 -8.78460346426424, 29.593048676374842 -8.549710268832193, 29.90917114880834 -7.893275190886684 C30.057116394395553 -7.527847573959537, 30.205061639982763 -7.162419957032389, 30.378259229970325 -6.734618561215508 C30.45888793820163 -6.491777738462893, 30.539516646432936 -6.248936915710279, 30.77214813421488 -5.548287939305138 C30.870759650211053 -5.172239490310359, 30.96937116620722 -4.79619104131558, 31.08921928754556 -4.339158212148133 C31.150810068494348 -4.022902569192265, 31.21240084944314 -3.7066469262363975, 31.328169776581777 -3.1121979531509023 C31.36700331223053 -2.8110127192081626, 31.405836847879282 -2.509827485265423, 31.488017702509367 -1.872449005199798 C31.51129628114431 -1.5098663528300682, 31.534574859779255 -1.1472837004603385, 31.568106215913414 -0.6250057626472757 C31.568106215913414 -0.198658298430738, 31.568106215913414 0.22768916578579967, 31.568106215913414 0.625005762647271 C31.543501832116174 1.0082389005904402, 31.51889744831893 1.3914720385336092, 31.488017702509367 1.8724490051997846 C31.4499514581385 2.1676832795100345, 31.411885213767636 2.4629175538202843, 31.328169776581777 3.1121979531508885 C31.25527898240109 3.486476775793911, 31.182388188220404 3.8607555984369335, 31.08921928754556 4.339158212148129 C30.986228892717815 4.7319052239457955, 30.88323849789007 5.124652235743462, 30.772148134214884 5.548287939305125 C30.662453009357822 5.878672177829944, 30.552757884500764 6.209056416354761, 30.37825922997033 6.734618561215495 C30.212334331341044 7.144456268769513, 30.04640943271176 7.554293976323532, 29.909171148808344 7.893275190886679 C29.739610927442165 8.24537061856109, 29.57005070607599 8.5974660462355, 29.366811474273504 9.019496659696284 C29.201507157949464 9.313011212206744, 29.036202841625425 9.606525764717205, 28.75340887860425 10.108655082055236 C28.528801580202263 10.453712207905276, 28.304194281800275 10.798769333755319, 28.07148396464064 11.156274872382301 C27.890980298687253 11.398133340537584, 27.710476632733865 11.639991808692866, 27.323838908126582 12.158051136245302 C27.038941029579647 12.492708395535065, 26.754043151032707 12.827365654824828, 26.51354594296866 13.10986736009567 C26.288157186785206 13.342599755616112, 26.06276843060175 13.575332151136552, 25.64393473676799 14.007812326905684 C25.38559165259553 14.242432680567672, 25.12724856842307 14.477053034229662, 24.718578708501887 14.848196188198111 C24.358448993566324 15.13539005240503, 23.998319278630756 15.42258391661195, 23.741280344578715 15.627565626425152 C23.475328692110157 15.81308198632574, 23.209377039641595 15.998598346226327, 22.716055573605708 16.34271804539089 C22.462389125826434 16.496492136744198, 22.208722678047156 16.650266228097507, 21.647117264076787 16.990714730406093 C21.42319934935771 17.107532563088768, 21.199281434638635 17.224350395771438, 20.538857912792388 17.56889292409717 C20.090317848339097 17.767448305162375, 19.641777783885804 17.96600368622758, 19.395831595147804 18.07487676824742 C19.14951205291519 18.16552463674191, 18.903192510682572 18.256172505236403, 18.222735251460616 18.506587066708033 C17.761383048272073 18.643513978927263, 17.30003084508353 18.78044089114649, 17.024389386235413 18.86224982926107 C16.63440792067365 18.95126055390865, 16.24442645511189 19.04027127855623, 15.805718259676766 19.140403561325773 C15.418079370560758 19.203074010733566, 15.030440481444751 19.26574446014136, 14.571729652847878 19.3399052695533 C14.181901589077896 19.37751151402835, 13.792073525307913 19.4151177585034, 13.3274942896239 19.45993515863156 C13.064619862869135 19.468365029843554, 12.80174543611437 19.476794901055545, 12.078125000000004 19.5 C12.078125000000002 19.5, 12.078125000000002 19.5, 12.078125 19.5 C6.963880425806083 19.5, 1.8496358516121667 19.5, -12.078124999999996 19.5 C-12.390755548281401 19.489974546815063, -12.703386096562806 19.479949093630125, -13.327494289623893 19.45993515863156 C-13.80975126056067 19.413412408644152, -14.292008231497446 19.366889658656746, -14.571729652847871 19.3399052695533 C-14.86100019204682 19.29313825210215, -15.150270731245767 19.246371234650997, -15.805718259676759 19.140403561325773 C-16.15838550250477 19.059909564519113, -16.511052745332783 18.979415567712454, -17.024389386235388 18.862249829261074 C-17.43103821889644 18.741558590270554, -17.83768705155749 18.620867351280037, -18.22273525146059 18.506587066708043 C-18.582656522738482 18.37413271180202, -18.94257779401637 18.241678356895996, -19.395831595147797 18.074876768247425 C-19.842641405260974 17.877087319452418, -20.289451215374154 17.67929787065741, -20.53885791279238 17.568892924097174 C-20.953015263535153 17.35282729949511, -21.36717261427793 17.13676167489305, -21.64711726407678 16.990714730406097 C-22.005642263181965 16.773374769021775, -22.364167262287147 16.556034807637452, -22.716055573605686 16.3427180453909 C-22.92685941884984 16.19567040849996, -23.137663264093998 16.048622771609022, -23.741280344578712 15.627565626425156 C-23.961966409949156 15.451574361995064, -24.1826524753196 15.275583097564972, -24.71857870850187 14.848196188198125 C-24.919830126958182 14.665424974776844, -25.121081545414494 14.48265376135556, -25.643934736767974 14.007812326905697 C-25.834463638941443 13.811075592697806, -26.024992541114912 13.614338858489917, -26.513545942968655 13.109867360095677 C-26.7705597075302 12.807964367744189, -27.027573472091746 12.506061375392699, -27.32383890812658 12.158051136245307 C-27.531091511668922 11.88035152859917, -27.738344115211266 11.602651920953035, -28.071483964640635 11.156274872382316 C-28.338680257467743 10.74578961434899, -28.60587655029485 10.335304356315664, -28.753408878604244 10.108655082055249 C-28.89588135656462 9.855680770533809, -29.038353834524994 9.602706459012369, -29.3668114742735 9.019496659696289 C-29.47923498454453 8.786046835140729, -29.591658494815558 8.55259701058517, -29.90917114880834 7.893275190886686 C-30.04600119320657 7.555302335794118, -30.182831237604802 7.21732948070155, -30.378259229970325 6.73461856121551 C-30.510131296581864 6.3374409075420255, -30.6420033631934 5.940263253868541, -30.77214813421488 5.5482879393051325 C-30.884103977778388 5.1213517858279465, -30.996059821341895 4.69441563235076, -31.089219287545557 4.339158212148136 C-31.160901987562777 3.9710826977037272, -31.232584687579998 3.6030071832593187, -31.328169776581777 3.112197953150904 C-31.389482627302755 2.6366675905508408, -31.450795478023732 2.1611372279507775, -31.488017702509364 1.872449005199809 C-31.510816313713853 1.5173422329821629, -31.533614924918343 1.1622354607645167, -31.568106215913414 0.6250057626472781 C-31.568106215913414 0.1429655566170202, -31.568106215913414 -0.3390746494132377, -31.568106215913414 -0.6250057626472687 C-31.545463343913116 -0.9776867710492003, -31.522820471912823 -1.330367779451132, -31.488017702509367 -1.8724490051997822 C-31.433446485935537 -2.2956925846408134, -31.378875269361707 -2.7189361640818444, -31.328169776581777 -3.112197953150895 C-31.251020671543753 -3.5083423020520286, -31.173871566505728 -3.9044866509531615, -31.08921928754556 -4.339158212148126 C-30.970554995640995 -4.791676586609672, -30.85189070373643 -5.244194961071217, -30.772148134214884 -5.548287939305123 C-30.66665295315069 -5.866022616295996, -30.561157772086496 -6.1837572932868685, -30.378259229970332 -6.734618561215485 C-30.193969981686312 -7.189816567467242, -30.009680733402295 -7.645014573718998, -29.909171148808344 -7.893275190886676 C-29.72928965359905 -8.266802964536199, -29.549408158389756 -8.640330738185723, -29.366811474273504 -9.019496659696282 C-29.23996427402075 -9.244726708416906, -29.11311707376799 -9.469956757137528, -28.753408878604247 -10.108655082055243 C-28.5571653981247 -10.41013776682486, -28.36092191764515 -10.711620451594479, -28.07148396464064 -11.156274872382308 C-27.906975760706246 -11.376700878648709, -27.74246755677185 -11.59712688491511, -27.323838908126586 -12.158051136245302 C-27.107148352542936 -12.412588192875766, -26.890457796959282 -12.667125249506231, -26.513545942968662 -13.10986736009567 C-26.26043171982858 -13.371228576552, -26.007317496688497 -13.632589793008329, -25.643934736767996 -14.007812326905677 C-25.387386932676876 -14.240802254698302, -25.130839128585755 -14.473792182490925, -24.718578708501887 -14.848196188198107 C-24.39433497310912 -15.106771938685666, -24.07009123771636 -15.365347689173225, -23.74128034457872 -15.627565626425149 C-23.530562287898587 -15.774553420927555, -23.31984423121845 -15.921541215429961, -22.71605557360571 -16.342718045390885 C-22.46379145216522 -16.49564203827664, -22.21152733072473 -16.648566031162392, -21.64711726407679 -16.99071473040609 C-21.33822886005998 -17.151861612929196, -21.02934045604317 -17.313008495452298, -20.538857912792388 -17.56889292409717 C-20.194766075049106 -17.721212173544412, -19.850674237305828 -17.873531422991658, -19.395831595147804 -18.07487676824742 C-18.98598377041504 -18.22570455634084, -18.576135945682275 -18.376532344434256, -18.22273525146062 -18.506587066708033 C-17.77160850596583 -18.640479116758275, -17.32048176047104 -18.77437116680852, -17.024389386235413 -18.862249829261067 C-16.578464709050287 -18.964029226898106, -16.13254003186516 -19.065808624535148, -15.805718259676768 -19.140403561325773 C-15.428276218365987 -19.201425463458154, -15.050834177055208 -19.262447365590535, -14.57172965284788 -19.3399052695533 C-14.289294698382191 -19.367151429932875, -14.006859743916504 -19.39439759031245, -13.327494289623903 -19.45993515863156 C-12.8736929418442 -19.474487684584115, -12.419891594064495 -19.489040210536672, -12.078125000000005 -19.5 C-12.078125000000004 -19.5, -12.078125000000002 -19.5, -12.078125 -19.5"
                    stroke="none"
                    strokeWidth={0}
                    fill="#b8ddf9"
                    style={{}}
                  />
                  <path
                    d="M-12.078125 -19.5 C-5.924829774373887 -19.5, 0.22846545125222661 -19.5, 12.078125 -19.5 M-12.078125 -19.5 C-4.814496021900576 -19.5, 2.4491329561988486 -19.5, 12.078125 -19.5 M12.078125 -19.5 C12.078125 -19.5, 12.078124999999998 -19.5, 12.078124999999998 -19.5 M12.078125 -19.5 C12.078125 -19.5, 12.078124999999998 -19.5, 12.078124999999998 -19.5 M12.078124999999998 -19.5 C12.441873634383 -19.488335289289104, 12.805622268766003 -19.476670578578204, 13.3274942896239 -19.45993515863156 M12.078124999999998 -19.5 C12.532379788700757 -19.485432933079675, 12.986634577401516 -19.47086586615935, 13.3274942896239 -19.45993515863156 M13.3274942896239 -19.45993515863156 C13.807164667329774 -19.413661934182304, 14.286835045035648 -19.36738870973305, 14.571729652847864 -19.3399052695533 M13.3274942896239 -19.45993515863156 C13.801028369146323 -19.414253895488084, 14.274562448668746 -19.368572632344605, 14.571729652847864 -19.3399052695533 M14.571729652847864 -19.3399052695533 C14.893714969670889 -19.287849180562777, 15.215700286493915 -19.23579309157226, 15.805718259676757 -19.140403561325776 M14.571729652847864 -19.3399052695533 C14.95738479591501 -19.277555536822504, 15.343039938982157 -19.215205804091713, 15.805718259676757 -19.140403561325776 M15.805718259676757 -19.140403561325776 C16.16944394932275 -19.05738554619602, 16.533169638968744 -18.974367531066267, 17.02438938623539 -18.862249829261074 M15.805718259676757 -19.140403561325776 C16.126060352016076 -19.06728756917684, 16.446402444355392 -18.994171577027902, 17.02438938623539 -18.862249829261074 M17.02438938623539 -18.862249829261074 C17.38349272754503 -18.755669842532278, 17.742596068854663 -18.64908985580348, 18.222735251460602 -18.50658706670804 M17.02438938623539 -18.862249829261074 C17.289091842644222 -18.783687529650482, 17.55379429905305 -18.705125230039886, 18.222735251460602 -18.50658706670804 M18.222735251460602 -18.50658706670804 C18.55003560656231 -18.386137510499292, 18.87733596166402 -18.26568795429055, 19.395831595147794 -18.074876768247425 M18.222735251460602 -18.50658706670804 C18.550093676000973 -18.38611614040908, 18.877452100541348 -18.265645214110116, 19.395831595147794 -18.074876768247425 M19.395831595147794 -18.074876768247425 C19.67475781502438 -17.951404404760396, 19.953684034900963 -17.827932041273368, 20.53885791279238 -17.568892924097174 M19.395831595147794 -18.074876768247425 C19.63322380796536 -17.969790277622877, 19.870616020782933 -17.86470378699833, 20.53885791279238 -17.568892924097174 M20.53885791279238 -17.568892924097174 C20.92860160992879 -17.365563886943864, 21.318345307065197 -17.16223484979055, 21.647117264076783 -16.990714730406097 M20.53885791279238 -17.568892924097174 C20.824956837900263 -17.4196352981235, 21.111055763008142 -17.270377672149827, 21.647117264076783 -16.990714730406097 M21.647117264076783 -16.990714730406097 C22.038385002127423 -16.753525928255346, 22.429652740178067 -16.51633712610459, 22.716055573605697 -16.342718045390892 M21.647117264076783 -16.990714730406097 C22.060261650758463 -16.740264175293753, 22.473406037440142 -16.48981362018141, 22.716055573605697 -16.342718045390892 M22.716055573605697 -16.342718045390892 C23.006691307612652 -16.13998313876579, 23.297327041619607 -15.937248232140687, 23.741280344578712 -15.627565626425154 M22.716055573605697 -16.342718045390892 C22.921976694424107 -16.19907638568962, 23.127897815242513 -16.05543472598835, 23.741280344578712 -15.627565626425154 M23.741280344578712 -15.627565626425154 C24.098989658241084 -15.342301967824024, 24.456698971903453 -15.057038309222893, 24.71857870850187 -14.848196188198123 M23.741280344578712 -15.627565626425154 C23.960250064300435 -15.45294310197604, 24.17921978402216 -15.278320577526927, 24.71857870850187 -14.848196188198123 M24.71857870850187 -14.848196188198123 C24.942935272221156 -14.644441493177654, 25.167291835940443 -14.440686798157182, 25.643934736767985 -14.007812326905688 M24.71857870850187 -14.848196188198123 C25.05144070707682 -14.545899728138226, 25.38430270565177 -14.243603268078326, 25.643934736767985 -14.007812326905688 M25.643934736767985 -14.007812326905688 C25.838139303409843 -13.807280167356522, 26.032343870051697 -13.606748007807356, 26.513545942968648 -13.10986736009568 M25.643934736767985 -14.007812326905688 C25.925414341762004 -13.717161524844009, 26.20689394675602 -13.42651072278233, 26.513545942968648 -13.10986736009568 M26.513545942968648 -13.10986736009568 C26.7891637658367 -12.786110982256464, 27.064781588704754 -12.462354604417245, 27.323838908126582 -12.158051136245305 M26.513545942968648 -13.10986736009568 C26.784246160725473 -12.79188748103977, 27.054946378482295 -12.47390760198386, 27.323838908126582 -12.158051136245305 M27.323838908126582 -12.158051136245305 C27.53861875583975 -11.870265707156314, 27.753398603552917 -11.582480278067324, 28.071483964640635 -11.156274872382312 M27.323838908126582 -12.158051136245305 C27.500545609108627 -11.921280255240998, 27.677252310090672 -11.68450937423669, 28.071483964640635 -11.156274872382312 M28.071483964640635 -11.156274872382312 C28.32890530347469 -10.76080656862499, 28.586326642308748 -10.365338264867667, 28.753408878604247 -10.108655082055241 M28.071483964640635 -11.156274872382312 C28.336454184770155 -10.749209459796699, 28.601424404899678 -10.342144047211086, 28.753408878604247 -10.108655082055241 M28.753408878604247 -10.108655082055241 C28.91484609739027 -9.822006952809614, 29.076283316176294 -9.535358823563987, 29.3668114742735 -9.019496659696287 M28.753408878604247 -10.108655082055241 C28.990836593153766 -9.687078132709432, 29.22826430770328 -9.265501183363625, 29.3668114742735 -9.019496659696287 M29.3668114742735 -9.019496659696287 C29.572144928746756 -8.593117348050459, 29.77747838322001 -8.166738036404633, 29.90917114880834 -7.893275190886684 M29.3668114742735 -9.019496659696287 C29.558272377510008 -8.621923997518616, 29.749733280746515 -8.224351335340943, 29.90917114880834 -7.893275190886684 M29.90917114880834 -7.893275190886684 C30.01436178252493 -7.63345229188416, 30.11955241624152 -7.373629392881634, 30.378259229970325 -6.734618561215508 M29.90917114880834 -7.893275190886684 C30.027083002811704 -7.602030631827766, 30.144994856815067 -7.310786072768847, 30.378259229970325 -6.734618561215508 M30.378259229970325 -6.734618561215508 C30.473645588449024 -6.447330047229996, 30.569031946927723 -6.160041533244485, 30.77214813421488 -5.548287939305138 M30.378259229970325 -6.734618561215508 C30.4664450148643 -6.4690170276115895, 30.55463079975827 -6.20341549400767, 30.77214813421488 -5.548287939305138 M30.77214813421488 -5.548287939305138 C30.884391785306097 -5.12025425098822, 30.996635436397316 -4.692220562671301, 31.08921928754556 -4.339158212148133 M30.77214813421488 -5.548287939305138 C30.895590178087872 -5.077549925897186, 31.019032221960863 -4.606811912489233, 31.08921928754556 -4.339158212148133 M31.08921928754556 -4.339158212148133 C31.1445043576088 -4.055281061877104, 31.199789427672037 -3.771403911606076, 31.328169776581777 -3.1121979531509023 M31.08921928754556 -4.339158212148133 C31.16069776826375 -3.9721313206424975, 31.232176248981933 -3.6051044291368615, 31.328169776581777 -3.1121979531509023 M31.328169776581777 -3.1121979531509023 C31.376457970087078 -2.7376842599061613, 31.424746163592374 -2.3631705666614207, 31.488017702509367 -1.872449005199798 M31.328169776581777 -3.1121979531509023 C31.377702257256274 -2.7280338143341525, 31.42723473793077 -2.3438696755174027, 31.488017702509367 -1.872449005199798 M31.488017702509367 -1.872449005199798 C31.51718329574453 -1.4181713485189853, 31.546348888979693 -0.9638936918381726, 31.568106215913414 -0.6250057626472757 M31.488017702509367 -1.872449005199798 C31.50701681144247 -1.576522547762, 31.526015920375574 -1.280596090324202, 31.568106215913414 -0.6250057626472757 M31.568106215913414 -0.6250057626472757 C31.568106215913414 -0.3491671353752083, 31.568106215913414 -0.07332850810314095, 31.568106215913414 0.625005762647271 M31.568106215913414 -0.6250057626472757 C31.568106215913414 -0.2584357822009094, 31.568106215913414 0.10813419824545689, 31.568106215913414 0.625005762647271 M31.568106215913414 0.625005762647271 C31.55022460992594 0.9035262096747342, 31.53234300393847 1.1820466567021972, 31.488017702509367 1.8724490051997846 M31.568106215913414 0.625005762647271 C31.551817943293884 0.8787087563534981, 31.53552967067435 1.1324117500597253, 31.488017702509367 1.8724490051997846 M31.488017702509367 1.8724490051997846 C31.44253453340021 2.225207483142777, 31.397051364291052 2.5779659610857695, 31.328169776581777 3.1121979531508885 M31.488017702509367 1.8724490051997846 C31.444210222903155 2.2122111662602353, 31.400402743296947 2.5519733273206864, 31.328169776581777 3.1121979531508885 M31.328169776581777 3.1121979531508885 C31.239147084079786 3.5693106641958905, 31.150124391577798 4.026423375240893, 31.08921928754556 4.339158212148129 M31.328169776581777 3.1121979531508885 C31.26974609975238 3.4121911858213774, 31.211322422922983 3.7121844184918658, 31.08921928754556 4.339158212148129 M31.08921928754556 4.339158212148129 C31.003810783336018 4.664857854978994, 30.918402279126475 4.990557497809858, 30.772148134214884 5.548287939305125 M31.08921928754556 4.339158212148129 C31.001837991390857 4.672380965679332, 30.91445669523615 5.0056037192105345, 30.772148134214884 5.548287939305125 M30.772148134214884 5.548287939305125 C30.62647294578235 5.987038396674644, 30.48079775734982 6.425788854044162, 30.37825922997033 6.734618561215495 M30.772148134214884 5.548287939305125 C30.680275126805128 5.8249947996474605, 30.58840211939537 6.1017016599897955, 30.37825922997033 6.734618561215495 M30.37825922997033 6.734618561215495 C30.21948899722725 7.126784105704534, 30.060718764484164 7.518949650193572, 29.909171148808344 7.893275190886679 M30.37825922997033 6.734618561215495 C30.256090383558195 7.036377973827432, 30.13392153714606 7.338137386439368, 29.909171148808344 7.893275190886679 M29.909171148808344 7.893275190886679 C29.71093581169759 8.304915109953896, 29.51270047458683 8.716555029021114, 29.366811474273504 9.019496659696284 M29.909171148808344 7.893275190886679 C29.70712648230619 8.312825263941722, 29.50508181580404 8.732375336996764, 29.366811474273504 9.019496659696284 M29.366811474273504 9.019496659696284 C29.12595673493752 9.44715863857435, 28.885101995601538 9.87482061745242, 28.75340887860425 10.108655082055236 M29.366811474273504 9.019496659696284 C29.13048946657596 9.439110314561454, 28.894167458878417 9.858723969426624, 28.75340887860425 10.108655082055236 M28.75340887860425 10.108655082055236 C28.482974817078105 10.524114422272916, 28.212540755551956 10.939573762490596, 28.07148396464064 11.156274872382301 M28.75340887860425 10.108655082055236 C28.523652616394255 10.461622399004753, 28.29389635418426 10.81458971595427, 28.07148396464064 11.156274872382301 M28.07148396464064 11.156274872382301 C27.91546519591227 11.36532580887609, 27.759446427183896 11.574376745369879, 27.323838908126582 12.158051136245302 M28.07148396464064 11.156274872382301 C27.902024111623142 11.383335637315549, 27.732564258605645 11.610396402248796, 27.323838908126582 12.158051136245302 M27.323838908126582 12.158051136245302 C27.073895653692933 12.45164870507714, 26.823952399259284 12.745246273908979, 26.51354594296866 13.10986736009567 M27.323838908126582 12.158051136245302 C27.042568207753444 12.488447705659837, 26.761297507380306 12.818844275074373, 26.51354594296866 13.10986736009567 M26.51354594296866 13.10986736009567 C26.339413067712762 13.289673850372324, 26.165280192456862 13.469480340648976, 25.64393473676799 14.007812326905684 M26.51354594296866 13.10986736009567 C26.24630517673866 13.385815392103098, 25.97906441050866 13.661763424110525, 25.64393473676799 14.007812326905684 M25.64393473676799 14.007812326905684 C25.388325974461647 14.239949441795057, 25.132717212155306 14.472086556684427, 24.718578708501887 14.848196188198111 M25.64393473676799 14.007812326905684 C25.368124793226684 14.258295620098682, 25.092314849685383 14.508778913291682, 24.718578708501887 14.848196188198111 M24.718578708501887 14.848196188198111 C24.476996042497117 15.040851935552181, 24.235413376492346 15.233507682906252, 23.741280344578715 15.627565626425152 M24.718578708501887 14.848196188198111 C24.349116082125025 15.142832800920262, 23.97965345574816 15.437469413642413, 23.741280344578715 15.627565626425152 M23.741280344578715 15.627565626425152 C23.52027129615429 15.781731971278523, 23.299262247729864 15.935898316131896, 22.716055573605708 16.34271804539089 M23.741280344578715 15.627565626425152 C23.509041960203298 15.789565069927816, 23.276803575827884 15.951564513430482, 22.716055573605708 16.34271804539089 M22.716055573605708 16.34271804539089 C22.38805137945919 16.54155611544911, 22.060047185312666 16.740394185507334, 21.647117264076787 16.990714730406093 M22.716055573605708 16.34271804539089 C22.3502665775486 16.564461484415453, 21.98447758149149 16.786204923440017, 21.647117264076787 16.990714730406093 M21.647117264076787 16.990714730406093 C21.31657316855524 17.163159373316088, 20.986029073033695 17.33560401622608, 20.538857912792388 17.56889292409717 M21.647117264076787 16.990714730406093 C21.398040419248876 17.12065796081148, 21.148963574420968 17.25060119121687, 20.538857912792388 17.56889292409717 M20.538857912792388 17.56889292409717 C20.296783770523955 17.67605196600511, 20.054709628255523 17.783211007913053, 19.395831595147804 18.07487676824742 M20.538857912792388 17.56889292409717 C20.199128710674255 17.71928096416615, 19.859399508556123 17.869669004235128, 19.395831595147804 18.07487676824742 M19.395831595147804 18.07487676824742 C19.055799055896593 18.2000118859182, 18.715766516645385 18.325147003588985, 18.222735251460616 18.506587066708033 M19.395831595147804 18.07487676824742 C19.03596160986075 18.207312249434736, 18.67609162457369 18.339747730622047, 18.222735251460616 18.506587066708033 M18.222735251460616 18.506587066708033 C17.802587868528548 18.631284604563657, 17.38244048559648 18.755982142419278, 17.024389386235413 18.86224982926107 M18.222735251460616 18.506587066708033 C17.82680906050179 18.624095881925626, 17.430882869542966 18.741604697143224, 17.024389386235413 18.86224982926107 M17.024389386235413 18.86224982926107 C16.675342042347054 18.941917607756803, 16.326294698458696 19.021585386252536, 15.805718259676766 19.140403561325773 M17.024389386235413 18.86224982926107 C16.779720721194696 18.91809385544436, 16.535052056153983 18.973937881627656, 15.805718259676766 19.140403561325773 M15.805718259676766 19.140403561325773 C15.501846853338716 19.18953113374456, 15.197975447000664 19.238658706163342, 14.571729652847878 19.3399052695533 M15.805718259676766 19.140403561325773 C15.511162070790528 19.18802512162754, 15.216605881904291 19.235646681929303, 14.571729652847878 19.3399052695533 M14.571729652847878 19.3399052695533 C14.155271261394109 19.38008050971235, 13.73881286994034 19.420255749871398, 13.3274942896239 19.45993515863156 M14.571729652847878 19.3399052695533 C14.105055523885085 19.384924761516583, 13.638381394922291 19.42994425347987, 13.3274942896239 19.45993515863156 M13.3274942896239 19.45993515863156 C12.970368857674135 19.471387476131703, 12.61324342572437 19.48283979363185, 12.078125000000004 19.5 M13.3274942896239 19.45993515863156 C13.068498971802288 19.468240634370293, 12.809503653980675 19.47654611010903, 12.078125000000004 19.5 M12.078125000000004 19.5 C12.078125000000002 19.5, 12.078125000000002 19.5, 12.078125 19.5 M12.078125000000004 19.5 C12.078125000000002 19.5, 12.078125000000002 19.5, 12.078125 19.5 M12.078125 19.5 C4.676336426738906 19.5, -2.725452146522189 19.5, -12.078124999999996 19.5 M12.078125 19.5 C3.967226228216804 19.5, -4.143672543566392 19.5, -12.078124999999996 19.5 M-12.078124999999996 19.5 C-12.46958764715303 19.487446554841622, -12.861050294306065 19.474893109683244, -13.327494289623893 19.45993515863156 M-12.078124999999996 19.5 C-12.44089360137369 19.488366717040194, -12.803662202747383 19.476733434080387, -13.327494289623893 19.45993515863156 M-13.327494289623893 19.45993515863156 C-13.685790632854571 19.42537074131449, -14.044086976085252 19.390806323997428, -14.571729652847871 19.3399052695533 M-13.327494289623893 19.45993515863156 C-13.627388131213765 19.4310047604085, -13.927281972803636 19.402074362185434, -14.571729652847871 19.3399052695533 M-14.571729652847871 19.3399052695533 C-15.065141168813707 19.260134322115395, -15.558552684779544 19.180363374677494, -15.805718259676759 19.140403561325773 M-14.571729652847871 19.3399052695533 C-14.856984757459845 19.29378743642601, -15.142239862071817 19.24766960329872, -15.805718259676759 19.140403561325773 M-15.805718259676759 19.140403561325773 C-16.143774548305085 19.063244419469804, -16.48183083693341 18.986085277613835, -17.024389386235388 18.862249829261074 M-15.805718259676759 19.140403561325773 C-16.061217427971396 19.082087543450413, -16.31671659626603 19.02377152557505, -17.024389386235388 18.862249829261074 M-17.024389386235388 18.862249829261074 C-17.461639043739638 18.7324764260841, -17.89888870124389 18.60270302290713, -18.22273525146059 18.506587066708043 M-17.024389386235388 18.862249829261074 C-17.36225279649355 18.761973742577684, -17.700116206751716 18.66169765589429, -18.22273525146059 18.506587066708043 M-18.22273525146059 18.506587066708043 C-18.56800887343847 18.37952318214581, -18.913282495416347 18.252459297583577, -19.395831595147797 18.074876768247425 M-18.22273525146059 18.506587066708043 C-18.537305223278274 18.390822409226192, -18.851875195095957 18.27505775174434, -19.395831595147797 18.074876768247425 M-19.395831595147797 18.074876768247425 C-19.762130872573856 17.912726944012906, -20.128430149999915 17.75057711977839, -20.53885791279238 17.568892924097174 M-19.395831595147797 18.074876768247425 C-19.756437692852135 17.915247145793536, -20.117043790556473 17.75561752333965, -20.53885791279238 17.568892924097174 M-20.53885791279238 17.568892924097174 C-20.929456713986397 17.36511777970473, -21.32005551518041 17.161342635312284, -21.64711726407678 16.990714730406097 M-20.53885791279238 17.568892924097174 C-20.860885313031837 17.400891435660643, -21.18291271327129 17.232889947224116, -21.64711726407678 16.990714730406097 M-21.64711726407678 16.990714730406097 C-21.88435509676955 16.846899762063483, -22.12159292946232 16.703084793720873, -22.716055573605686 16.3427180453909 M-21.64711726407678 16.990714730406097 C-21.98026664391668 16.788757618544082, -22.313416023756577 16.586800506682067, -22.716055573605686 16.3427180453909 M-22.716055573605686 16.3427180453909 C-23.03276026632652 16.12179856167403, -23.34946495904735 15.900879077957162, -23.741280344578712 15.627565626425156 M-22.716055573605686 16.3427180453909 C-23.066254075243016 16.0984347304975, -23.41645257688035 15.854151415604102, -23.741280344578712 15.627565626425156 M-23.741280344578712 15.627565626425156 C-24.060135940545628 15.373286773745301, -24.37899153651254 15.119007921065446, -24.71857870850187 14.848196188198125 M-23.741280344578712 15.627565626425156 C-24.021367047420142 15.404203934329301, -24.301453750261572 15.180842242233448, -24.71857870850187 14.848196188198125 M-24.71857870850187 14.848196188198125 C-25.087148485961897 14.513470868130856, -25.455718263421925 14.178745548063587, -25.643934736767974 14.007812326905697 M-24.71857870850187 14.848196188198125 C-25.064192966049898 14.534318463945159, -25.409807223597927 14.220440739692194, -25.643934736767974 14.007812326905697 M-25.643934736767974 14.007812326905697 C-25.85142680373124 13.793559732350612, -26.058918870694505 13.57930713779553, -26.513545942968655 13.109867360095677 M-25.643934736767974 14.007812326905697 C-25.948296941264665 13.69353336216115, -26.252659145761356 13.379254397416604, -26.513545942968655 13.109867360095677 M-26.513545942968655 13.109867360095677 C-26.811202674036576 12.76022282663549, -27.1088594051045 12.410578293175302, -27.32383890812658 12.158051136245307 M-26.513545942968655 13.109867360095677 C-26.795124937367028 12.779108650976672, -27.076703931765405 12.44834994185767, -27.32383890812658 12.158051136245307 M-27.32383890812658 12.158051136245307 C-27.569179784903053 11.829316712378512, -27.814520661679524 11.500582288511717, -28.071483964640635 11.156274872382316 M-27.32383890812658 12.158051136245307 C-27.488398405835646 11.937556400993806, -27.652957903544714 11.717061665742305, -28.071483964640635 11.156274872382316 M-28.071483964640635 11.156274872382316 C-28.259544995217798 10.86736262795821, -28.447606025794965 10.578450383534106, -28.753408878604244 10.108655082055249 M-28.071483964640635 11.156274872382316 C-28.227429499388634 10.916700653769942, -28.383375034136634 10.677126435157568, -28.753408878604244 10.108655082055249 M-28.753408878604244 10.108655082055249 C-28.972849758251122 9.719015579443612, -29.192290637898 9.329376076831974, -29.3668114742735 9.019496659696289 M-28.753408878604244 10.108655082055249 C-28.905725439926904 9.838201603702538, -29.058042001249568 9.567748125349826, -29.3668114742735 9.019496659696289 M-29.3668114742735 9.019496659696289 C-29.558223332954938 8.622025839586605, -29.749635191636372 8.224555019476922, -29.90917114880834 7.893275190886686 M-29.3668114742735 9.019496659696289 C-29.572394712780202 8.592598666160491, -29.777977951286903 8.165700672624691, -29.90917114880834 7.893275190886686 M-29.90917114880834 7.893275190886686 C-30.021985514607263 7.614621526245963, -30.134799880406188 7.335967861605239, -30.378259229970325 6.73461856121551 M-29.90917114880834 7.893275190886686 C-30.056214064619244 7.530076345952376, -30.203256980430147 7.166877501018066, -30.378259229970325 6.73461856121551 M-30.378259229970325 6.73461856121551 C-30.476122016866157 6.439871439402882, -30.573984803761984 6.145124317590254, -30.77214813421488 5.5482879393051325 M-30.378259229970325 6.73461856121551 C-30.48452806422873 6.414553764068568, -30.590796898487135 6.0944889669216264, -30.77214813421488 5.5482879393051325 M-30.77214813421488 5.5482879393051325 C-30.880754737700762 5.134123889813761, -30.989361341186644 4.719959840322389, -31.089219287545557 4.339158212148136 M-30.77214813421488 5.5482879393051325 C-30.8435061707596 5.276168819191447, -30.91486420730432 5.004049699077762, -31.089219287545557 4.339158212148136 M-31.089219287545557 4.339158212148136 C-31.168838662556396 3.9303295490283516, -31.248458037567236 3.5215008859085675, -31.328169776581777 3.112197953150904 M-31.089219287545557 4.339158212148136 C-31.164760268979233 3.951271238078299, -31.24030125041291 3.5633842640084623, -31.328169776581777 3.112197953150904 M-31.328169776581777 3.112197953150904 C-31.378300088293962 2.7233971548609315, -31.428430400006146 2.3345963565709593, -31.488017702509364 1.872449005199809 M-31.328169776581777 3.112197953150904 C-31.377276702996593 2.7313343291370438, -31.426383629411408 2.3504707051231835, -31.488017702509364 1.872449005199809 M-31.488017702509364 1.872449005199809 C-31.519397534528743 1.3836827921534889, -31.55077736654812 0.8949165791071686, -31.568106215913414 0.6250057626472781 M-31.488017702509364 1.872449005199809 C-31.511736583545282 1.5030082875292132, -31.5354554645812 1.1335675698586172, -31.568106215913414 0.6250057626472781 M-31.568106215913414 0.6250057626472781 C-31.568106215913414 0.15051026599856798, -31.568106215913414 -0.3239852306501422, -31.568106215913414 -0.6250057626472687 M-31.568106215913414 0.6250057626472781 C-31.568106215913414 0.33367665752039105, -31.568106215913414 0.04234755239350396, -31.568106215913414 -0.6250057626472687 M-31.568106215913414 -0.6250057626472687 C-31.54259636235445 -1.0223423230113131, -31.517086508795487 -1.4196788833753575, -31.488017702509367 -1.8724490051997822 M-31.568106215913414 -0.6250057626472687 C-31.54423623964186 -0.9967999105747498, -31.52036626337031 -1.368594058502231, -31.488017702509367 -1.8724490051997822 M-31.488017702509367 -1.8724490051997822 C-31.45157320276538 -2.1551053484336515, -31.415128703021395 -2.4377616916675207, -31.328169776581777 -3.112197953150895 M-31.488017702509367 -1.8724490051997822 C-31.437239207120072 -2.2662769880910774, -31.386460711730777 -2.6601049709823723, -31.328169776581777 -3.112197953150895 M-31.328169776581777 -3.112197953150895 C-31.251374920716323 -3.5065233074214612, -31.174580064850872 -3.900848661692027, -31.08921928754556 -4.339158212148126 M-31.328169776581777 -3.112197953150895 C-31.258213963279264 -3.471406269292932, -31.188258149976747 -3.8306145854349687, -31.08921928754556 -4.339158212148126 M-31.08921928754556 -4.339158212148126 C-30.999763112332065 -4.680293378788768, -30.910306937118573 -5.02142854542941, -30.772148134214884 -5.548287939305123 M-31.08921928754556 -4.339158212148126 C-31.021267892339075 -4.598286332391426, -30.953316497132594 -4.857414452634727, -30.772148134214884 -5.548287939305123 M-30.772148134214884 -5.548287939305123 C-30.625806910996783 -5.989044387330543, -30.47946568777868 -6.429800835355962, -30.378259229970332 -6.734618561215485 M-30.772148134214884 -5.548287939305123 C-30.649472908480462 -5.917766173574336, -30.52679768274604 -6.287244407843548, -30.378259229970332 -6.734618561215485 M-30.378259229970332 -6.734618561215485 C-30.265236540424546 -7.013786789538624, -30.152213850878763 -7.292955017861763, -29.909171148808344 -7.893275190886676 M-30.378259229970332 -6.734618561215485 C-30.197550087751587 -7.1809736362693695, -30.016840945532845 -7.627328711323254, -29.909171148808344 -7.893275190886676 M-29.909171148808344 -7.893275190886676 C-29.69678917433279 -8.334290905131445, -29.484407199857234 -8.775306619376215, -29.366811474273504 -9.019496659696282 M-29.909171148808344 -7.893275190886676 C-29.71548071832812 -8.29547751409017, -29.521790287847896 -8.697679837293661, -29.366811474273504 -9.019496659696282 M-29.366811474273504 -9.019496659696282 C-29.15624672747497 -9.393375689629773, -28.945681980676433 -9.767254719563262, -28.753408878604247 -10.108655082055243 M-29.366811474273504 -9.019496659696282 C-29.199763285374953 -9.316107634549033, -29.032715096476405 -9.612718609401785, -28.753408878604247 -10.108655082055243 M-28.753408878604247 -10.108655082055243 C-28.55432104696051 -10.414507454028286, -28.355233215316773 -10.720359826001328, -28.07148396464064 -11.156274872382308 M-28.753408878604247 -10.108655082055243 C-28.601221090070172 -10.342456393386884, -28.449033301536097 -10.576257704718527, -28.07148396464064 -11.156274872382308 M-28.07148396464064 -11.156274872382308 C-27.872939313088253 -11.422306617672652, -27.674394661535864 -11.688338362962995, -27.323838908126586 -12.158051136245302 M-28.07148396464064 -11.156274872382308 C-27.813794451495482 -11.501555343999225, -27.556104938350327 -11.846835815616142, -27.323838908126586 -12.158051136245302 M-27.323838908126586 -12.158051136245302 C-27.093149556372584 -12.429031975411526, -26.862460204618586 -12.70001281457775, -26.513545942968662 -13.10986736009567 M-27.323838908126586 -12.158051136245302 C-27.014272106060734 -12.521685916801896, -26.70470530399488 -12.885320697358491, -26.513545942968662 -13.10986736009567 M-26.513545942968662 -13.10986736009567 C-26.332088222628926 -13.297237354302352, -26.150630502289186 -13.484607348509035, -25.643934736767996 -14.007812326905677 M-26.513545942968662 -13.10986736009567 C-26.266148750303113 -13.36532527321011, -26.018751557637568 -13.620783186324552, -25.643934736767996 -14.007812326905677 M-25.643934736767996 -14.007812326905677 C-25.32235876808725 -14.29985911322765, -25.000782799406498 -14.591905899549621, -24.718578708501887 -14.848196188198107 M-25.643934736767996 -14.007812326905677 C-25.323407734305214 -14.298906469862617, -25.00288073184243 -14.590000612819559, -24.718578708501887 -14.848196188198107 M-24.718578708501887 -14.848196188198107 C-24.398138691011678 -15.103738574879564, -24.077698673521464 -15.359280961561021, -23.74128034457872 -15.627565626425149 M-24.718578708501887 -14.848196188198107 C-24.517896877673113 -15.008234607916256, -24.317215046844343 -15.168273027634402, -23.74128034457872 -15.627565626425149 M-23.74128034457872 -15.627565626425149 C-23.386162973358587 -15.875280131805077, -23.03104560213846 -16.122994637185005, -22.71605557360571 -16.342718045390885 M-23.74128034457872 -15.627565626425149 C-23.374317160427022 -15.88354325810916, -23.00735397627533 -16.13952088979317, -22.71605557360571 -16.342718045390885 M-22.71605557360571 -16.342718045390885 C-22.496268470547115 -16.475954278877392, -22.276481367488515 -16.6091905123639, -21.64711726407679 -16.99071473040609 M-22.71605557360571 -16.342718045390885 C-22.442073507977845 -16.508807583671835, -22.168091442349976 -16.67489712195278, -21.64711726407679 -16.99071473040609 M-21.64711726407679 -16.99071473040609 C-21.382679277943687 -17.128671858391115, -21.118241291810584 -17.26662898637614, -20.538857912792388 -17.56889292409717 M-21.64711726407679 -16.99071473040609 C-21.224382884828707 -17.21125498528552, -20.801648505580626 -17.431795240164956, -20.538857912792388 -17.56889292409717 M-20.538857912792388 -17.56889292409717 C-20.30882951266863 -17.67071967328191, -20.078801112544873 -17.772546422466647, -19.395831595147804 -18.07487676824742 M-20.538857912792388 -17.56889292409717 C-20.16280008206873 -17.735362570399335, -19.786742251345075 -17.9018322167015, -19.395831595147804 -18.07487676824742 M-19.395831595147804 -18.07487676824742 C-19.14859754451261 -18.16586118428768, -18.901363493877422 -18.256845600327942, -18.22273525146062 -18.506587066708033 M-19.395831595147804 -18.07487676824742 C-19.13081262614994 -18.172406198647128, -18.865793657152075 -18.269935629046838, -18.22273525146062 -18.506587066708033 M-18.22273525146062 -18.506587066708033 C-17.928982219094536 -18.593771424773156, -17.63522918672845 -18.680955782838275, -17.024389386235413 -18.862249829261067 M-18.22273525146062 -18.506587066708033 C-17.845345175277114 -18.618594460358363, -17.467955099093608 -18.730601854008693, -17.024389386235413 -18.862249829261067 M-17.024389386235413 -18.862249829261067 C-16.577043656826906 -18.964353572794863, -16.129697927418395 -19.066457316328655, -15.805718259676768 -19.140403561325773 M-17.024389386235413 -18.862249829261067 C-16.567933120745785 -18.966432993203572, -16.11147685525616 -19.07061615714608, -15.805718259676768 -19.140403561325773 M-15.805718259676768 -19.140403561325773 C-15.458454203995789 -19.1965465207753, -15.11119014831481 -19.25268948022483, -14.57172965284788 -19.3399052695533 M-15.805718259676768 -19.140403561325773 C-15.355739830345792 -19.213152584145167, -14.905761401014816 -19.285901606964565, -14.57172965284788 -19.3399052695533 M-14.57172965284788 -19.3399052695533 C-14.098108388028008 -19.385594943357564, -13.624487123208135 -19.43128461716183, -13.327494289623903 -19.45993515863156 M-14.57172965284788 -19.3399052695533 C-14.320770219133804 -19.36411502430082, -14.069810785419728 -19.38832477904834, -13.327494289623903 -19.45993515863156 M-13.327494289623903 -19.45993515863156 C-13.023848820428864 -19.46967247781859, -12.720203351233824 -19.479409797005626, -12.078125000000005 -19.5 M-13.327494289623903 -19.45993515863156 C-12.85134830311105 -19.475204233657088, -12.375202316598198 -19.490473308682613, -12.078125000000005 -19.5 M-12.078125000000005 -19.5 C-12.078125000000004 -19.5, -12.078125000000004 -19.5, -12.078125 -19.5 M-12.078125000000005 -19.5 C-12.078125000000004 -19.5, -12.078125000000002 -19.5, -12.078125 -19.5"
                    stroke="#00000000"
                    strokeWidth={1.3}
                    fill="none"
                    strokeDasharray="0 0"
                    style={{}}
                  />
                </g>
                <g
                  className="label"
                  style={{}}
                  transform="translate(-19.203125, -12)"
                >
                  <rect />
                  <foreignObject width={38.40625} height={24}>
                    <div
                      style={{
                        display: "table-cell",
                        whiteSpace: "nowrap",
                        lineHeight: 1.5,
                        maxWidth: 200,
                        textAlign: "center",
                      }}
                    >
                      <span className="nodeLabel markdown-node-label">
                        <p>
                          <em>{"STOP"}</em>
                        </p>
                      </span>
                    </div>
                  </foreignObject>
                </g>
              </g>
            </g>
          </g>
          <g className="root" transform="translate(0, 85.79998779296875)">
            <g className="edgePaths">
              <path
                d="M152.109,85L152.026,91.167C151.943,97.333,151.776,109.667,151.767,121.5C151.758,133.333,151.908,144.667,151.982,150.334L152.057,156"
                id="compiler_diagram-e1"
                className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
                style={{}}
                data-edge="true"
                data-et="edge"
                data-id="e1"
                data-points="W3sieCI6MTUyLjEwOTM3NSwieSI6ODV9LHsieCI6MTUxLjYwOTM3NSwieSI6MTIyfSx7IngiOjE1Mi4xMDkzNzUsInkiOjE2MH1d"
                data-look="classic"
                markerEnd="url(#compiler_diagram_flowchart-v2-pointEnd)"
              />
              <path
                d="M152.109,199L152.026,207.25C151.943,215.5,151.776,232,151.693,247.917C151.609,263.833,151.609,279.167,151.609,286.833L151.609,294.5"
                id="compiler_diagram-e2"
                className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
                style={{}}
                data-edge="true"
                data-et="edge"
                data-id="e2"
                data-points="W3sieCI6MTUyLjEwOTM3NSwieSI6MTk5fSx7IngiOjE1MS42MDkzNzUsInkiOjI0OC41fSx7IngiOjE1MS42MDkzNzUsInkiOjI5OC41fV0="
                data-look="classic"
                markerEnd="url(#compiler_diagram_flowchart-v2-pointEnd)"
              />
              <path
                d="M151.609,352.5L151.609,360.833C151.609,369.167,151.609,385.833,151.609,401.833C151.609,417.833,151.609,433.167,151.609,440.833L151.609,448.5"
                id="compiler_diagram-e3"
                className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
                style={{}}
                data-edge="true"
                data-et="edge"
                data-id="e3"
                data-points="W3sieCI6MTUxLjYwOTM3NSwieSI6MzUyLjV9LHsieCI6MTUxLjYwOTM3NSwieSI6NDAyLjV9LHsieCI6MTUxLjYwOTM3NSwieSI6NDUyLjV9XQ=="
                data-look="classic"
                markerEnd="url(#compiler_diagram_flowchart-v2-pointEnd)"
              />
            </g>
            <g className="edgeLabels">
              <g className="edgeLabel">
                <g className="label" data-id="e1" transform="translate(0, 0)">
                  <text y={-10.1} textAnchor="middle">
                    <tspan
                      className="text-outer-tspan row"
                      x={0}
                      y="-0.1em"
                      dy="1.1em"
                      textAnchor="middle"
                    />
                  </text>
                </g>
              </g>
              <g>
                <rect
                  className="background"
                  style={{
                    stroke: "none",
                  }}
                />
              </g>
              <g className="edgeLabel" transform="translate(151.609375, 248.5)">
                <g
                  className="label"
                  data-id="e2"
                  transform="translate(0, -10.5)"
                >
                  <g>
                    <rect
                      className="background"
                      style={{}}
                      x={-30.8046875}
                      y={-2}
                      width={61.609375}
                      height={25}
                    />
                    <text y={-10.1} textAnchor="middle" style={{}}>
                      <tspan
                        className="text-outer-tspan row"
                        x={0}
                        y="-0.1em"
                        dy="1.1em"
                        textAnchor="middle"
                      >
                        <tspan
                          fontStyle="italic"
                          className="text-inner-tspan"
                          fontWeight="normal"
                        >
                          {"String"}
                        </tspan>
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <g className="edgeLabel" transform="translate(151.609375, 402.5)">
                <g
                  className="label"
                  data-id="e3"
                  transform="translate(0, -10.5)"
                >
                  <g>
                    <rect
                      className="background"
                      style={{}}
                      x={-30.8046875}
                      y={-2}
                      width={61.609375}
                      height={25}
                    />
                    <text y={-10.1} textAnchor="middle" style={{}}>
                      <tspan
                        className="text-outer-tspan row"
                        x={0}
                        y="-0.1em"
                        dy="1.1em"
                        textAnchor="middle"
                      >
                        <tspan
                          fontStyle="italic"
                          className="text-inner-tspan"
                          fontWeight="normal"
                        >
                          {"Tokens"}
                        </tspan>
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
            <g className="nodes">
              <g
                className="node default"
                id="compiler_diagram-flowchart-start-0"
                data-look="classic"
                transform="translate(151.609375, 65)"
              >
                <g className="basic label-container outer-path">
                  <path
                    d="M-16.8828125 -19.5 C-4.038112396100281 -19.5, 8.806587707799437 -19.5, 16.8828125 -19.5 C16.8828125 -19.5, 16.8828125 -19.5, 16.8828125 -19.5 C17.29291232606682 -19.486848896788924, 17.70301215213364 -19.47369779357785, 18.1321817896239 -19.45993515863156 C18.41674994574331 -19.432483210854, 18.701318101862718 -19.405031263076438, 19.376417152847864 -19.3399052695533 C19.73520746413727 -19.281898834484448, 20.09399777542668 -19.223892399415597, 20.61040575967676 -19.140403561325776 C20.92008949385619 -19.069720269874548, 21.22977322803562 -18.99903697842332, 21.82907688623539 -18.862249829261074 C22.221493281391762 -18.745782703014356, 22.61390967654813 -18.629315576767638, 23.027422751460602 -18.50658706670804 C23.363211443247163 -18.383013724133942, 23.699000135033728 -18.25944038155985, 24.200519095147794 -18.074876768247425 C24.630065336874814 -17.88472938907141, 25.059611578601835 -17.69458200989539, 25.34354541279238 -17.568892924097174 C25.768230390572988 -17.34733504321274, 26.1929153683536 -17.12577716232831, 26.451804764076783 -16.990714730406097 C26.79672740828738 -16.78162059649518, 27.141650052497983 -16.572526462584264, 27.520743073605697 -16.342718045390892 C27.92900145547381 -16.057934671420206, 28.33725983734192 -15.773151297449523, 28.545967844578712 -15.627565626425154 C28.796251322538886 -15.42797121307498, 29.04653480049906 -15.228376799724805, 29.52326620850187 -14.848196188198123 C29.786512203661783 -14.609123140501246, 30.0497581988217 -14.370050092804368, 30.448622236767985 -14.007812326905688 C30.628877326261506 -13.821684147785552, 30.809132415755027 -13.635555968665415, 31.318233442968648 -13.10986736009568 C31.537664757986903 -12.852110851479702, 31.757096073005158 -12.594354342863724, 32.12852640812658 -12.158051136245305 C32.38753881699708 -11.810998104874713, 32.646551225867576 -11.463945073504123, 32.876171464640635 -11.156274872382312 C33.043787906429856 -10.89877100647727, 33.21140434821908 -10.641267140572227, 33.55809637860425 -10.108655082055241 C33.75671583694981 -9.755986121361623, 33.95533529529538 -9.403317160668003, 34.171498974273504 -9.019496659696287 C34.374268487062 -8.598441427818436, 34.57703799985048 -8.177386195940585, 34.71385864880834 -7.893275190886684 C34.83449761649306 -7.595294608309656, 34.95513658417778 -7.297314025732628, 35.182946729970325 -6.734618561215508 C35.2819118773266 -6.436551305333301, 35.38087702468288 -6.138484049451094, 35.57683563421488 -5.548287939305138 C35.67133085840836 -5.187936694966169, 35.76582608260184 -4.827585450627199, 35.89390678754556 -4.339158212148133 C35.98815895297174 -3.855193262886932, 36.082411118397914 -3.371228313625731, 36.132857276581774 -3.1121979531509023 C36.173912472843995 -2.793781958206621, 36.214967669106215 -2.4753659632623397, 36.29270520250937 -1.872449005199798 C36.32080432332147 -1.4347825173492783, 36.34890344413356 -0.9971160294987588, 36.37279371591342 -0.6250057626472757 C36.37279371591342 -0.13824407867318012, 36.37279371591342 0.34851760530091547, 36.37279371591342 0.625005762647271 C36.34096404176607 1.1207786299427296, 36.309134367618725 1.6165514972381878, 36.29270520250937 1.8724490051997846 C36.23856191971608 2.292373614743985, 36.18441863692279 2.712298224288186, 36.132857276581774 3.1121979531508885 C36.068617356484204 3.442056365739986, 36.00437743638664 3.7719147783290827, 35.89390678754556 4.339158212148129 C35.80306260660481 4.685586446192287, 35.71221842566406 5.032014680236445, 35.57683563421489 5.548287939305125 C35.46732744135885 5.878109168426425, 35.357819248502814 6.207930397547725, 35.182946729970325 6.734618561215495 C35.06359525620042 7.029419008930916, 34.944243782430526 7.324219456646339, 34.71385864880834 7.893275190886679 C34.584722382810504 8.16142941030465, 34.45558611681266 8.429583629722622, 34.171498974273504 9.019496659696284 C34.0327465208213 9.265865691010136, 33.89399406736909 9.51223472232399, 33.55809637860425 10.108655082055236 C33.33830191753776 10.446318397330165, 33.11850745647128 10.783981712605096, 32.87617146464064 11.156274872382301 C32.58525404181704 11.546077715843488, 32.29433661899344 11.935880559304676, 32.12852640812658 12.158051136245302 C31.856424611954598 12.47767738905973, 31.584322815782617 12.797303641874159, 31.31823344296866 13.10986736009567 C31.044369104264934 13.392654774487632, 30.77050476556121 13.675442188879593, 30.44862223676799 14.007812326905684 C30.092363670764723 14.331356930464729, 29.736105104761457 14.654901534023772, 29.523266208501887 14.848196188198111 C29.28553722816194 15.037778723785369, 29.047808247821987 15.227361259372627, 28.545967844578715 15.627565626425152 C28.28987635030618 15.806203966807562, 28.03378485603364 15.984842307189973, 27.520743073605708 16.34271804539089 C27.121250941592034 16.584892523493934, 26.72175880957836 16.82706700159698, 26.451804764076787 16.990714730406093 C26.183481708947607 17.130698696397868, 25.91515865381843 17.27068266238964, 25.343545412792388 17.56889292409717 C24.891618155399023 17.768947714999438, 24.439690898005658 17.969002505901702, 24.200519095147804 18.07487676824742 C23.75076080646115 18.240391976004155, 23.301002517774503 18.405907183760885, 23.027422751460616 18.506587066708033 C22.575387768097443 18.640748676990178, 22.123352784734273 18.77491028727232, 21.829076886235413 18.86224982926107 C21.398195352104928 18.96059572766157, 20.96731381797444 19.05894162606207, 20.610405759676766 19.140403561325773 C20.27203165526994 19.1951092623959, 19.933657550863114 19.249814963466022, 19.37641715284788 19.3399052695533 C18.90743348543555 19.385147559913186, 18.438449818023223 19.43038985027307, 18.1321817896239 19.45993515863156 C17.821490499980314 19.46989842356652, 17.510799210336728 19.47986168850148, 16.882812500000004 19.5 C16.882812500000004 19.5, 16.8828125 19.5, 16.8828125 19.5 C8.767993356487324 19.5, 0.6531742129746476 19.5, -16.882812499999996 19.5 C-17.16073559965238 19.491087547138644, -17.438658699304767 19.482175094277288, -18.132181789623893 19.45993515863156 C-18.490557312541796 19.425363102945294, -18.848932835459703 19.39079104725903, -19.37641715284787 19.3399052695533 C-19.78564216023052 19.273744943947, -20.19486716761317 19.207584618340704, -20.61040575967676 19.140403561325773 C-20.949278629328365 19.06305804017993, -21.28815149897997 18.985712519034088, -21.829076886235388 18.862249829261074 C-22.117725058862028 18.776580566770665, -22.406373231488665 18.690911304280256, -23.02742275146059 18.506587066708043 C-23.42196594944274 18.36139152273327, -23.816509147424892 18.2161959787585, -24.200519095147797 18.074876768247425 C-24.594610415120055 17.900424231199356, -24.988701735092313 17.725971694151287, -25.34354541279238 17.568892924097174 C-25.71658314090636 17.374279380282182, -26.089620869020333 17.179665836467187, -26.45180476407678 16.990714730406097 C-26.754180004911635 16.807413082457852, -27.05655524574649 16.624111434509608, -27.520743073605686 16.3427180453909 C-27.752122708429305 16.1813176284009, -27.983502343252926 16.019917211410903, -28.545967844578712 15.627565626425156 C-28.76045826463099 15.456515224263255, -28.97494868468327 15.285464822101352, -29.52326620850187 14.848196188198125 C-29.71747674430628 14.671819318109755, -29.91168728011069 14.495442448021384, -30.448622236767974 14.007812326905697 C-30.72853831861858 13.718775990857232, -31.00845440046918 13.429739654808769, -31.318233442968655 13.109867360095677 C-31.530646154637953 12.860355302343226, -31.743058866307248 12.610843244590775, -32.128526408126575 12.158051136245307 C-32.35161338699964 11.859134908197273, -32.57470036587271 11.56021868014924, -32.876171464640635 11.156274872382316 C-33.07548409653344 10.850077146859391, -33.27479672842624 10.543879421336468, -33.55809637860425 10.108655082055249 C-33.69049736844177 9.873563717544695, -33.82289835827929 9.638472353034143, -34.171498974273504 9.019496659696289 C-34.381158016831826 8.58413517183906, -34.59081705939015 8.148773683981831, -34.71385864880834 7.893275190886686 C-34.81423074003112 7.645354185004056, -34.914602831253895 7.397433179121426, -35.182946729970325 6.73461856121551 C-35.31679761731559 6.331481014774288, -35.45064850466087 5.928343468333066, -35.57683563421488 5.5482879393051325 C-35.658910510402514 5.23530086492534, -35.74098538659015 4.922313790545546, -35.89390678754556 4.339158212148136 C-35.971392408239886 3.941285926474509, -36.04887802893421 3.543413640800882, -36.132857276581774 3.112197953150904 C-36.17791016698701 2.7627766318673923, -36.22296305739225 2.4133553105838805, -36.29270520250937 1.872449005199809 C-36.323054989124266 1.3997265807659867, -36.35340477573916 0.9270041563321644, -36.37279371591342 0.6250057626472781 C-36.37279371591342 0.13495759107480093, -36.37279371591342 -0.3550905804976763, -36.37279371591342 -0.6250057626472687 C-36.34225505475875 -1.100670060494795, -36.31171639360409 -1.5763343583423213, -36.29270520250937 -1.8724490051997822 C-36.24236839842759 -2.2628513175317804, -36.192031594345806 -2.6532536298637783, -36.132857276581774 -3.112197953150895 C-36.06476286289549 -3.461848375670543, -35.9966684492092 -3.8114987981901907, -35.89390678754556 -4.339158212148126 C-35.77658987331311 -4.786538451588728, -35.65927295908066 -5.233918691029331, -35.57683563421489 -5.548287939305123 C-35.48591135362948 -5.8221373856115886, -35.394987073044085 -6.0959868319180535, -35.18294672997033 -6.734618561215485 C-35.07786566573326 -6.994170821485218, -34.97278460149619 -7.25372308175495, -34.71385864880834 -7.893275190886676 C-34.58661163165327 -8.157506344659188, -34.4593646144982 -8.421737498431701, -34.171498974273504 -9.019496659696282 C-33.95892509852077 -9.39694310153431, -33.74635122276805 -9.774389543372338, -33.55809637860425 -10.108655082055243 C-33.33307764854722 -10.454344277412297, -33.108058918490194 -10.80003347276935, -32.87617146464064 -11.156274872382308 C-32.59831732675754 -11.528574104112973, -32.32046318887443 -11.900873335843638, -32.12852640812659 -12.158051136245302 C-31.89730138585263 -12.429661204484786, -31.666076363578668 -12.701271272724272, -31.318233442968662 -13.10986736009567 C-31.03962737612203 -13.397550998098302, -30.761021309275403 -13.685234636100933, -30.448622236767996 -14.007812326905677 C-30.169762339708363 -14.261065507186675, -29.89090244264873 -14.514318687467672, -29.523266208501887 -14.848196188198107 C-29.292678959376868 -15.032083383190908, -29.06209171025185 -15.215970578183708, -28.54596784457872 -15.627565626425149 C-28.297487273396452 -15.800894916331336, -28.04900670221419 -15.974224206237523, -27.52074307360571 -16.342718045390885 C-27.23948044293744 -16.513221104984677, -26.95821781226917 -16.683724164578468, -26.45180476407679 -16.99071473040609 C-26.03022193311073 -17.210654223284394, -25.60863910214467 -17.430593716162697, -25.343545412792388 -17.56889292409717 C-25.01445906341853 -17.714569688965266, -24.68537271404467 -17.860246453833366, -24.200519095147804 -18.07487676824742 C-23.86095232789303 -18.199840477517967, -23.521385560638258 -18.32480418678851, -23.02742275146062 -18.506587066708033 C-22.70501320605458 -18.602276527422305, -22.382603660648545 -18.69796598813658, -21.829076886235413 -18.862249829261067 C-21.38395095428348 -18.96384691851093, -20.93882502233155 -19.065444007760792, -20.610405759676766 -19.140403561325773 C-20.270564202826517 -19.195346508726686, -19.930722645976267 -19.2502894561276, -19.376417152847882 -19.3399052695533 C-19.044097652627368 -19.3719637320669, -18.711778152406854 -19.4040221945805, -18.132181789623903 -19.45993515863156 C-17.728307290451884 -19.472886627725984, -17.324432791279865 -19.485838096820405, -16.882812500000007 -19.5 C-16.882812500000004 -19.5, -16.882812500000004 -19.5, -16.8828125 -19.5"
                    stroke="none"
                    strokeWidth={0}
                    fill="#b8ddf9"
                    style={{}}
                  />
                  <path
                    d="M-16.8828125 -19.5 C-3.6117091081940256 -19.5, 9.659394283611949 -19.5, 16.8828125 -19.5 M-16.8828125 -19.5 C-3.743470625452664 -19.5, 9.395871249094672 -19.5, 16.8828125 -19.5 M16.8828125 -19.5 C16.8828125 -19.5, 16.8828125 -19.5, 16.8828125 -19.5 M16.8828125 -19.5 C16.8828125 -19.5, 16.8828125 -19.5, 16.8828125 -19.5 M16.8828125 -19.5 C17.293011445635074 -19.486845718217296, 17.703210391270147 -19.47369143643459, 18.1321817896239 -19.45993515863156 M16.8828125 -19.5 C17.259290568687653 -19.487927081107294, 17.635768637375307 -19.47585416221459, 18.1321817896239 -19.45993515863156 M18.1321817896239 -19.45993515863156 C18.52441189494666 -19.42209719209679, 18.91664200026942 -19.38425922556202, 19.376417152847864 -19.3399052695533 M18.1321817896239 -19.45993515863156 C18.404935037196747 -19.43362298087198, 18.677688284769598 -19.4073108031124, 19.376417152847864 -19.3399052695533 M19.376417152847864 -19.3399052695533 C19.697779503428194 -19.287949896913723, 20.019141854008527 -19.235994524274144, 20.61040575967676 -19.140403561325776 M19.376417152847864 -19.3399052695533 C19.67597103704691 -19.291475720631066, 19.97552492124596 -19.24304617170883, 20.61040575967676 -19.140403561325776 M20.61040575967676 -19.140403561325776 C21.010639011397355 -19.049052933386598, 21.41087226311795 -18.957702305447423, 21.82907688623539 -18.862249829261074 M20.61040575967676 -19.140403561325776 C20.9545555322216 -19.06185362152956, 21.29870530476644 -18.983303681733346, 21.82907688623539 -18.862249829261074 M21.82907688623539 -18.862249829261074 C22.256848764320132 -18.735289381265932, 22.684620642404873 -18.60832893327079, 23.027422751460602 -18.50658706670804 M21.82907688623539 -18.862249829261074 C22.307674652846174 -18.720204524341938, 22.786272419456953 -18.578159219422798, 23.027422751460602 -18.50658706670804 M23.027422751460602 -18.50658706670804 C23.40902794287462 -18.36615282874796, 23.790633134288633 -18.22571859078788, 24.200519095147794 -18.074876768247425 M23.027422751460602 -18.50658706670804 C23.33392484364643 -18.393791463509373, 23.640426935832256 -18.280995860310707, 24.200519095147794 -18.074876768247425 M24.200519095147794 -18.074876768247425 C24.615557563600955 -17.89115154994194, 25.030596032054113 -17.707426331636462, 25.34354541279238 -17.568892924097174 M24.200519095147794 -18.074876768247425 C24.467149040228314 -17.95684760085658, 24.733778985308838 -17.838818433465736, 25.34354541279238 -17.568892924097174 M25.34354541279238 -17.568892924097174 C25.662254145139233 -17.402622782574507, 25.980962877486082 -17.236352641051845, 26.451804764076783 -16.990714730406097 M25.34354541279238 -17.568892924097174 C25.64700752457065 -17.41057693475921, 25.950469636348917 -17.25226094542125, 26.451804764076783 -16.990714730406097 M26.451804764076783 -16.990714730406097 C26.83131993109799 -16.76065040587916, 27.2108350981192 -16.530586081352226, 27.520743073605697 -16.342718045390892 M26.451804764076783 -16.990714730406097 C26.713516037016323 -16.832063818763995, 26.97522730995586 -16.673412907121893, 27.520743073605697 -16.342718045390892 M27.520743073605697 -16.342718045390892 C27.78413924307678 -16.158984279804272, 28.04753541254786 -15.97525051421765, 28.545967844578712 -15.627565626425154 M27.520743073605697 -16.342718045390892 C27.85598089250931 -16.108870655135014, 28.191218711412926 -15.87502326487914, 28.545967844578712 -15.627565626425154 M28.545967844578712 -15.627565626425154 C28.859885498564278 -15.37722465107127, 29.173803152549844 -15.126883675717385, 29.52326620850187 -14.848196188198123 M28.545967844578712 -15.627565626425154 C28.867986433922123 -15.370764370698332, 29.190005023265535 -15.113963114971511, 29.52326620850187 -14.848196188198123 M29.52326620850187 -14.848196188198123 C29.88845353103704 -14.516542724198759, 30.253640853572207 -14.184889260199393, 30.448622236767985 -14.007812326905688 M29.52326620850187 -14.848196188198123 C29.852937398818543 -14.548797535774233, 30.182608589135217 -14.24939888335034, 30.448622236767985 -14.007812326905688 M30.448622236767985 -14.007812326905688 C30.78060098761317 -13.6650170106957, 31.11257973845835 -13.32222169448571, 31.318233442968648 -13.10986736009568 M30.448622236767985 -14.007812326905688 C30.667797105095584 -13.781496280766099, 30.886971973423183 -13.55518023462651, 31.318233442968648 -13.10986736009568 M31.318233442968648 -13.10986736009568 C31.49512321170286 -12.902082572427494, 31.672012980437078 -12.694297784759309, 32.12852640812658 -12.158051136245305 M31.318233442968648 -13.10986736009568 C31.50849566255497 -12.886374530742598, 31.698757882141294 -12.662881701389516, 32.12852640812658 -12.158051136245305 M32.12852640812658 -12.158051136245305 C32.35255019366375 -11.857879672612208, 32.57657397920092 -11.557708208979113, 32.876171464640635 -11.156274872382312 M32.12852640812658 -12.158051136245305 C32.34973683955435 -11.86164931081697, 32.57094727098213 -11.565247485388634, 32.876171464640635 -11.156274872382312 M32.876171464640635 -11.156274872382312 C33.06248967102104 -10.87004007393825, 33.248807877401454 -10.583805275494187, 33.55809637860425 -10.108655082055241 M32.876171464640635 -11.156274872382312 C33.08493894100158 -10.835551966775085, 33.29370641736253 -10.514829061167859, 33.55809637860425 -10.108655082055241 M33.55809637860425 -10.108655082055241 C33.75501613417467 -9.75900411575246, 33.95193588974509 -9.409353149449675, 34.171498974273504 -9.019496659696287 M33.55809637860425 -10.108655082055241 C33.734675021862394 -9.79512182042388, 33.91125366512053 -9.48158855879252, 34.171498974273504 -9.019496659696287 M34.171498974273504 -9.019496659696287 C34.282878759171865 -8.788214153209212, 34.394258544070226 -8.55693164672214, 34.71385864880834 -7.893275190886684 M34.171498974273504 -9.019496659696287 C34.31390847687508 -8.7237802804689, 34.456317979476644 -8.428063901241512, 34.71385864880834 -7.893275190886684 M34.71385864880834 -7.893275190886684 C34.86700420621208 -7.515002703231529, 35.02014976361581 -7.136730215576373, 35.182946729970325 -6.734618561215508 M34.71385864880834 -7.893275190886684 C34.897960060738036 -7.438541144061672, 35.08206147266774 -6.983807097236658, 35.182946729970325 -6.734618561215508 M35.182946729970325 -6.734618561215508 C35.28029659234145 -6.441416286347865, 35.377646454712576 -6.148214011480221, 35.57683563421488 -5.548287939305138 M35.182946729970325 -6.734618561215508 C35.328427900886446 -6.296452453692928, 35.47390907180257 -5.858286346170348, 35.57683563421488 -5.548287939305138 M35.57683563421488 -5.548287939305138 C35.689877639749554 -5.11720977948633, 35.80291964528422 -4.686131619667521, 35.89390678754556 -4.339158212148133 M35.57683563421488 -5.548287939305138 C35.668714239303654 -5.197914997662305, 35.76059284439243 -4.847542056019472, 35.89390678754556 -4.339158212148133 M35.89390678754556 -4.339158212148133 C35.948980109705616 -4.056368342606998, 36.00405343186567 -3.7735784730658635, 36.132857276581774 -3.1121979531509023 M35.89390678754556 -4.339158212148133 C35.94776159085349 -4.062625179378629, 36.00161639416142 -3.786092146609125, 36.132857276581774 -3.1121979531509023 M36.132857276581774 -3.1121979531509023 C36.172773444798885 -2.8026160347979547, 36.212689613015996 -2.4930341164450067, 36.29270520250937 -1.872449005199798 M36.132857276581774 -3.1121979531509023 C36.177386257953046 -2.7668399668772734, 36.22191523932432 -2.4214819806036445, 36.29270520250937 -1.872449005199798 M36.29270520250937 -1.872449005199798 C36.32287672200585 -1.4025032350299163, 36.35304824150233 -0.9325574648600344, 36.37279371591342 -0.6250057626472757 M36.29270520250937 -1.872449005199798 C36.314718050517925 -1.529581129015447, 36.336730898526476 -1.1867132528310962, 36.37279371591342 -0.6250057626472757 M36.37279371591342 -0.6250057626472757 C36.37279371591342 -0.1322641206289598, 36.37279371591342 0.36047752138935607, 36.37279371591342 0.625005762647271 M36.37279371591342 -0.6250057626472757 C36.37279371591342 -0.23646908340094558, 36.37279371591342 0.15206759584538454, 36.37279371591342 0.625005762647271 M36.37279371591342 0.625005762647271 C36.35016074591759 0.9775325393368294, 36.327527775921766 1.3300593160263876, 36.29270520250937 1.8724490051997846 M36.37279371591342 0.625005762647271 C36.35168203564416 0.9538372238825514, 36.3305703553749 1.2826686851178317, 36.29270520250937 1.8724490051997846 M36.29270520250937 1.8724490051997846 C36.247039009754715 2.2266269783951076, 36.20137281700006 2.58080495159043, 36.132857276581774 3.1121979531508885 M36.29270520250937 1.8724490051997846 C36.248821809314194 2.2127999370653795, 36.20493841611902 2.553150868930974, 36.132857276581774 3.1121979531508885 M36.132857276581774 3.1121979531508885 C36.06404843168634 3.4655168289344274, 35.99523958679091 3.8188357047179657, 35.89390678754556 4.339158212148129 M36.132857276581774 3.1121979531508885 C36.07987089065955 3.3842718461848937, 36.026884504737325 3.6563457392188994, 35.89390678754556 4.339158212148129 M35.89390678754556 4.339158212148129 C35.771820536438526 4.804726000135197, 35.64973428533149 5.270293788122267, 35.57683563421489 5.548287939305125 M35.89390678754556 4.339158212148129 C35.76903380447854 4.815353016875904, 35.64416082141151 5.291547821603681, 35.57683563421489 5.548287939305125 M35.57683563421489 5.548287939305125 C35.45800721344436 5.906180209928215, 35.339178792673835 6.264072480551306, 35.182946729970325 6.734618561215495 M35.57683563421489 5.548287939305125 C35.45693129683972 5.909420699317353, 35.33702695946456 6.270553459329581, 35.182946729970325 6.734618561215495 M35.182946729970325 6.734618561215495 C35.05619738674618 7.04769188951099, 34.92944804352202 7.360765217806485, 34.71385864880834 7.893275190886679 M35.182946729970325 6.734618561215495 C35.02831265217489 7.116567723016727, 34.87367857437946 7.498516884817959, 34.71385864880834 7.893275190886679 M34.71385864880834 7.893275190886679 C34.550302717498965 8.232902581786908, 34.3867467861896 8.572529972687136, 34.171498974273504 9.019496659696284 M34.71385864880834 7.893275190886679 C34.58486083610526 8.161141909075672, 34.455863023402166 8.429008627264665, 34.171498974273504 9.019496659696284 M34.171498974273504 9.019496659696284 C33.939342414122905 9.43171414064455, 33.707185853972305 9.843931621592816, 33.55809637860425 10.108655082055236 M34.171498974273504 9.019496659696284 C34.01060709702267 9.305176479824357, 33.84971521977184 9.590856299952431, 33.55809637860425 10.108655082055236 M33.55809637860425 10.108655082055236 C33.388653955127346 10.3689641461773, 33.21921153165044 10.629273210299361, 32.87617146464064 11.156274872382301 M33.55809637860425 10.108655082055236 C33.33416949319798 10.452666910827377, 33.11024260779172 10.796678739599518, 32.87617146464064 11.156274872382301 M32.87617146464064 11.156274872382301 C32.676806473006536 11.423405798647623, 32.47744148137244 11.690536724912945, 32.12852640812658 12.158051136245302 M32.87617146464064 11.156274872382301 C32.616715088157356 11.503922779907752, 32.35725871167406 11.851570687433204, 32.12852640812658 12.158051136245302 M32.12852640812658 12.158051136245302 C31.847650998483378 12.487983374675778, 31.56677558884017 12.817915613106255, 31.31823344296866 13.10986736009567 M32.12852640812658 12.158051136245302 C31.84651040200212 12.48932318420444, 31.564494395877656 12.82059523216358, 31.31823344296866 13.10986736009567 M31.31823344296866 13.10986736009567 C31.066381815744627 13.369924842607626, 30.814530188520596 13.629982325119581, 30.44862223676799 14.007812326905684 M31.31823344296866 13.10986736009567 C31.125024853151757 13.30937109180185, 30.931816263334856 13.508874823508032, 30.44862223676799 14.007812326905684 M30.44862223676799 14.007812326905684 C30.16453936961941 14.265808870429249, 29.880456502470825 14.523805413952815, 29.523266208501887 14.848196188198111 M30.44862223676799 14.007812326905684 C30.161274884142856 14.268773589765502, 29.873927531517722 14.52973485262532, 29.523266208501887 14.848196188198111 M29.523266208501887 14.848196188198111 C29.25120734466239 15.065155892319693, 28.979148480822893 15.282115596441272, 28.545967844578715 15.627565626425152 M29.523266208501887 14.848196188198111 C29.281542055877424 15.04096476736627, 29.039817903252956 15.23373334653443, 28.545967844578715 15.627565626425152 M28.545967844578715 15.627565626425152 C28.321606294378864 15.784070531389599, 28.09724474417901 15.940575436354044, 27.520743073605708 16.34271804539089 M28.545967844578715 15.627565626425152 C28.27728311706975 15.814988461161015, 28.008598389560785 16.002411295896877, 27.520743073605708 16.34271804539089 M27.520743073605708 16.34271804539089 C27.247487365873663 16.508367261246836, 26.974231658141623 16.674016477102782, 26.451804764076787 16.990714730406093 M27.520743073605708 16.34271804539089 C27.27267889251144 16.493096009757174, 27.024614711417172 16.64347397412346, 26.451804764076787 16.990714730406093 M26.451804764076787 16.990714730406093 C26.03509540757718 17.208111734776857, 25.618386051077575 17.425508739147617, 25.343545412792388 17.56889292409717 M26.451804764076787 16.990714730406093 C26.209009723730006 17.117380747437362, 25.966214683383228 17.24404676446863, 25.343545412792388 17.56889292409717 M25.343545412792388 17.56889292409717 C25.06096412214234 17.693983278991787, 24.778382831492294 17.819073633886408, 24.200519095147804 18.07487676824742 M25.343545412792388 17.56889292409717 C25.090312594182425 17.680991581011135, 24.83707977557246 17.7930902379251, 24.200519095147804 18.07487676824742 M24.200519095147804 18.07487676824742 C23.736891328488156 18.245496072106263, 23.273263561828507 18.41611537596511, 23.027422751460616 18.506587066708033 M24.200519095147804 18.07487676824742 C23.868429523759442 18.197088800320685, 23.53633995237108 18.319300832393946, 23.027422751460616 18.506587066708033 M23.027422751460616 18.506587066708033 C22.690412266786225 18.60661000955526, 22.35340178211184 18.706632952402487, 21.829076886235413 18.86224982926107 M23.027422751460616 18.506587066708033 C22.74391220336133 18.590731509206666, 22.460401655262043 18.6748759517053, 21.829076886235413 18.86224982926107 M21.829076886235413 18.86224982926107 C21.517525179593225 18.933359473237264, 21.205973472951033 19.004469117213457, 20.610405759676766 19.140403561325773 M21.829076886235413 18.86224982926107 C21.562090852254205 18.923187649270588, 21.295104818272996 18.984125469280105, 20.610405759676766 19.140403561325773 M20.610405759676766 19.140403561325773 C20.273711288319603 19.194837712350175, 19.93701681696244 19.24927186337458, 19.37641715284788 19.3399052695533 M20.610405759676766 19.140403561325773 C20.20724778166132 19.205583016674495, 19.80408980364587 19.270762472023222, 19.37641715284788 19.3399052695533 M19.37641715284788 19.3399052695533 C19.052074702696522 19.371194195640534, 18.727732252545163 19.40248312172777, 18.1321817896239 19.45993515863156 M19.37641715284788 19.3399052695533 C19.027017599371668 19.373611424262705, 18.67761804589546 19.407317578972112, 18.1321817896239 19.45993515863156 M18.1321817896239 19.45993515863156 C17.843831547344184 19.46918198966177, 17.55548130506447 19.478428820691985, 16.882812500000004 19.5 M18.1321817896239 19.45993515863156 C17.871107383869727 19.46830730667359, 17.610032978115555 19.476679454715626, 16.882812500000004 19.5 M16.882812500000004 19.5 C16.882812500000004 19.5, 16.8828125 19.5, 16.8828125 19.5 M16.882812500000004 19.5 C16.882812500000004 19.5, 16.882812500000004 19.5, 16.8828125 19.5 M16.8828125 19.5 C3.6839447284724613 19.5, -9.514923043055077 19.5, -16.882812499999996 19.5 M16.8828125 19.5 C8.484404169820708 19.5, 0.08599583964141644 19.5, -16.882812499999996 19.5 M-16.882812499999996 19.5 C-17.137070960834105 19.49184642604512, -17.391329421668217 19.483692852090243, -18.132181789623893 19.45993515863156 M-16.882812499999996 19.5 C-17.330264943722153 19.485651071043176, -17.777717387444312 19.471302142086355, -18.132181789623893 19.45993515863156 M-18.132181789623893 19.45993515863156 C-18.6038805352367 19.414430947943032, -19.07557928084951 19.368926737254505, -19.37641715284787 19.3399052695533 M-18.132181789623893 19.45993515863156 C-18.482815803597052 19.426109917002666, -18.83344981757021 19.392284675373777, -19.37641715284787 19.3399052695533 M-19.37641715284787 19.3399052695533 C-19.780543722014443 19.274569219898797, -20.184670291181018 19.209233170244296, -20.61040575967676 19.140403561325773 M-19.37641715284787 19.3399052695533 C-19.807770118150366 19.270167467315396, -20.239123083452856 19.200429665077497, -20.61040575967676 19.140403561325773 M-20.61040575967676 19.140403561325773 C-20.94576993300314 19.06385887721978, -21.281134106329525 18.987314193113786, -21.829076886235388 18.862249829261074 M-20.61040575967676 19.140403561325773 C-20.858808916692475 19.083707161719023, -21.10721207370819 19.027010762112276, -21.829076886235388 18.862249829261074 M-21.829076886235388 18.862249829261074 C-22.09940562749733 18.78201767783905, -22.36973436875927 18.701785526417023, -23.02742275146059 18.506587066708043 M-21.829076886235388 18.862249829261074 C-22.21496793132531 18.747719392661814, -22.60085897641524 18.633188956062558, -23.02742275146059 18.506587066708043 M-23.02742275146059 18.506587066708043 C-23.451102521419383 18.350668994910347, -23.874782291378175 18.19475092311265, -24.200519095147797 18.074876768247425 M-23.02742275146059 18.506587066708043 C-23.322287176537554 18.398074232582857, -23.617151601614516 18.289561398457668, -24.200519095147797 18.074876768247425 M-24.200519095147797 18.074876768247425 C-24.53911521698897 17.924990309205423, -24.87771133883015 17.775103850163422, -25.34354541279238 17.568892924097174 M-24.200519095147797 18.074876768247425 C-24.56655587745663 17.912843142814662, -24.932592659765458 17.750809517381903, -25.34354541279238 17.568892924097174 M-25.34354541279238 17.568892924097174 C-25.602556452218494 17.43376703073306, -25.861567491644607 17.298641137368943, -26.45180476407678 16.990714730406097 M-25.34354541279238 17.568892924097174 C-25.645041596737936 17.4116025580503, -25.946537780683492 17.254312192003425, -26.45180476407678 16.990714730406097 M-26.45180476407678 16.990714730406097 C-26.673522998144215 16.856307833953448, -26.895241232211646 16.721900937500802, -27.520743073605686 16.3427180453909 M-26.45180476407678 16.990714730406097 C-26.72669874335756 16.824072384709755, -27.00159272263834 16.65743003901341, -27.520743073605686 16.3427180453909 M-27.520743073605686 16.3427180453909 C-27.849552569592497 16.113354774924172, -28.178362065579304 15.883991504457448, -28.545967844578712 15.627565626425156 M-27.520743073605686 16.3427180453909 C-27.892554633223536 16.08335839686449, -28.26436619284139 15.82399874833808, -28.545967844578712 15.627565626425156 M-28.545967844578712 15.627565626425156 C-28.755090545201853 15.46079583766698, -28.96421324582499 15.294026048908805, -29.52326620850187 14.848196188198125 M-28.545967844578712 15.627565626425156 C-28.825921810503154 15.404309788488323, -29.105875776427595 15.181053950551489, -29.52326620850187 14.848196188198125 M-29.52326620850187 14.848196188198125 C-29.783770979035133 14.611612648178342, -30.044275749568396 14.375029108158559, -30.448622236767974 14.007812326905697 M-29.52326620850187 14.848196188198125 C-29.803786748590692 14.593434855856225, -30.08430728867951 14.338673523514325, -30.448622236767974 14.007812326905697 M-30.448622236767974 14.007812326905697 C-30.70889459166797 13.73905975171371, -30.96916694656797 13.470307176521722, -31.318233442968655 13.109867360095677 M-30.448622236767974 14.007812326905697 C-30.657797706871165 13.79182148039867, -30.86697317697436 13.575830633891647, -31.318233442968655 13.109867360095677 M-31.318233442968655 13.109867360095677 C-31.545620513372928 12.842765568507973, -31.7730075837772 12.57566377692027, -32.128526408126575 12.158051136245307 M-31.318233442968655 13.109867360095677 C-31.55873429451729 12.827361374980518, -31.79923514606593 12.544855389865358, -32.128526408126575 12.158051136245307 M-32.128526408126575 12.158051136245307 C-32.38157173060257 11.818993457030588, -32.63461705307858 11.479935777815871, -32.876171464640635 11.156274872382316 M-32.128526408126575 12.158051136245307 C-32.32677554179479 11.892415357997526, -32.525024675463 11.626779579749746, -32.876171464640635 11.156274872382316 M-32.876171464640635 11.156274872382316 C-33.08222849648177 10.83971593741379, -33.2882855283229 10.523157002445263, -33.55809637860425 10.108655082055249 M-32.876171464640635 11.156274872382316 C-33.03353851269475 10.91451682760199, -33.19090556074885 10.672758782821662, -33.55809637860425 10.108655082055249 M-33.55809637860425 10.108655082055249 C-33.69213785047054 9.870650875585799, -33.82617932233683 9.63264666911635, -34.171498974273504 9.019496659696289 M-33.55809637860425 10.108655082055249 C-33.80176559431111 9.675995715384053, -34.045434810017966 9.243336348712855, -34.171498974273504 9.019496659696289 M-34.171498974273504 9.019496659696289 C-34.34401533525725 8.66126274485475, -34.51653169624099 8.30302883001321, -34.71385864880834 7.893275190886686 M-34.171498974273504 9.019496659696289 C-34.29982253926156 8.753030031314136, -34.42814610424963 8.486563402931985, -34.71385864880834 7.893275190886686 M-34.71385864880834 7.893275190886686 C-34.87275660076717 7.50079417746547, -35.031654552725996 7.1083131640442545, -35.182946729970325 6.73461856121551 M-34.71385864880834 7.893275190886686 C-34.835604823020475 7.592559786780572, -34.9573509972326 7.291844382674457, -35.182946729970325 6.73461856121551 M-35.182946729970325 6.73461856121551 C-35.270454763223334 6.471058307569104, -35.35796279647635 6.207498053922697, -35.57683563421488 5.5482879393051325 M-35.182946729970325 6.73461856121551 C-35.31402332666148 6.339836736201297, -35.445099923352636 5.945054911187085, -35.57683563421488 5.5482879393051325 M-35.57683563421488 5.5482879393051325 C-35.64809657869478 5.2765390733145745, -35.71935752317468 5.0047902073240165, -35.89390678754556 4.339158212148136 M-35.57683563421488 5.5482879393051325 C-35.643770007563845 5.293038164184622, -35.71070438091281 5.0377883890641115, -35.89390678754556 4.339158212148136 M-35.89390678754556 4.339158212148136 C-35.957996420791446 4.010071490779299, -36.02208605403733 3.680984769410462, -36.132857276581774 3.112197953150904 M-35.89390678754556 4.339158212148136 C-35.97727951442537 3.911056880452376, -36.06065224130518 3.4829555487566166, -36.132857276581774 3.112197953150904 M-36.132857276581774 3.112197953150904 C-36.182910144289814 2.7239977952640664, -36.232963011997846 2.335797637377229, -36.29270520250937 1.872449005199809 M-36.132857276581774 3.112197953150904 C-36.19552824525316 2.626134295918207, -36.25819921392455 2.1400706386855095, -36.29270520250937 1.872449005199809 M-36.29270520250937 1.872449005199809 C-36.314883300848145 1.5270072217345332, -36.33706139918693 1.1815654382692575, -36.37279371591342 0.6250057626472781 M-36.29270520250937 1.872449005199809 C-36.313933058991296 1.5418080056764367, -36.335160915473224 1.2111670061530644, -36.37279371591342 0.6250057626472781 M-36.37279371591342 0.6250057626472781 C-36.37279371591342 0.27729095024102685, -36.37279371591342 -0.07042386216522445, -36.37279371591342 -0.6250057626472687 M-36.37279371591342 0.6250057626472781 C-36.37279371591342 0.13815438658392232, -36.37279371591342 -0.3486969894794335, -36.37279371591342 -0.6250057626472687 M-36.37279371591342 -0.6250057626472687 C-36.3564119837687 -0.8801644638973818, -36.340030251623986 -1.1353231651474949, -36.29270520250937 -1.8724490051997822 M-36.37279371591342 -0.6250057626472687 C-36.34824903424751 -1.007308991704281, -36.32370435258159 -1.3896122207612933, -36.29270520250937 -1.8724490051997822 M-36.29270520250937 -1.8724490051997822 C-36.25401783039735 -2.1725006236148334, -36.21533045828534 -2.4725522420298844, -36.132857276581774 -3.112197953150895 M-36.29270520250937 -1.8724490051997822 C-36.23312261313459 -2.334559802477441, -36.17354002375982 -2.7966705997550996, -36.132857276581774 -3.112197953150895 M-36.132857276581774 -3.112197953150895 C-36.05014788950215 -3.536893175169629, -35.967438502422524 -3.9615883971883634, -35.89390678754556 -4.339158212148126 M-36.132857276581774 -3.112197953150895 C-36.04442447204487 -3.56628171416807, -35.95599166750796 -4.020365475185245, -35.89390678754556 -4.339158212148126 M-35.89390678754556 -4.339158212148126 C-35.7765591114593 -4.78665575986957, -35.659211435373045 -5.234153307591013, -35.57683563421489 -5.548287939305123 M-35.89390678754556 -4.339158212148126 C-35.796252381229486 -4.711556787118745, -35.69859797491341 -5.083955362089364, -35.57683563421489 -5.548287939305123 M-35.57683563421489 -5.548287939305123 C-35.45939440839 -5.902002199771465, -35.3419531825651 -6.255716460237807, -35.18294672997033 -6.734618561215485 M-35.57683563421489 -5.548287939305123 C-35.429814512310095 -5.991092133847718, -35.282793390405295 -6.433896328390312, -35.18294672997033 -6.734618561215485 M-35.18294672997033 -6.734618561215485 C-35.04840730317306 -7.066933546547613, -34.91386787637578 -7.39924853187974, -34.71385864880834 -7.893275190886676 M-35.18294672997033 -6.734618561215485 C-35.01078329605816 -7.15986557153211, -34.83861986214598 -7.585112581848734, -34.71385864880834 -7.893275190886676 M-34.71385864880834 -7.893275190886676 C-34.53265070873423 -8.26955735567936, -34.35144276866013 -8.645839520472045, -34.171498974273504 -9.019496659696282 M-34.71385864880834 -7.893275190886676 C-34.54872073959722 -8.236187592748788, -34.3835828303861 -8.579099994610898, -34.171498974273504 -9.019496659696282 M-34.171498974273504 -9.019496659696282 C-33.99206012764629 -9.338108502036427, -33.81262128101908 -9.65672034437657, -33.55809637860425 -10.108655082055243 M-34.171498974273504 -9.019496659696282 C-33.9278917143645 -9.452046017574686, -33.684284454455494 -9.884595375453088, -33.55809637860425 -10.108655082055243 M-33.55809637860425 -10.108655082055243 C-33.35519867388658 -10.420360442164004, -33.15230096916892 -10.732065802272764, -32.87617146464064 -11.156274872382308 M-33.55809637860425 -10.108655082055243 C-33.29758525027044 -10.508870132208843, -33.03707412193663 -10.909085182362444, -32.87617146464064 -11.156274872382308 M-32.87617146464064 -11.156274872382308 C-32.701899550148966 -11.389783361303131, -32.527627635657296 -11.623291850223955, -32.12852640812659 -12.158051136245302 M-32.87617146464064 -11.156274872382308 C-32.64609720507699 -11.464553420001362, -32.41602294551334 -11.772831967620416, -32.12852640812659 -12.158051136245302 M-32.12852640812659 -12.158051136245302 C-31.824153191195226 -12.515585236179557, -31.519779974263862 -12.873119336113813, -31.318233442968662 -13.10986736009567 M-32.12852640812659 -12.158051136245302 C-31.919131610358217 -12.404018180605556, -31.70973681258985 -12.64998522496581, -31.318233442968662 -13.10986736009567 M-31.318233442968662 -13.10986736009567 C-31.100753468427055 -13.334433289247857, -30.883273493885447 -13.558999218400041, -30.448622236767996 -14.007812326905677 M-31.318233442968662 -13.10986736009567 C-31.11200488093011 -13.3228152820803, -30.905776318891565 -13.535763204064931, -30.448622236767996 -14.007812326905677 M-30.448622236767996 -14.007812326905677 C-30.25666791549954 -14.182140162648658, -30.064713594231087 -14.356467998391638, -29.523266208501887 -14.848196188198107 M-30.448622236767996 -14.007812326905677 C-30.2011076480846 -14.232598527470785, -29.95359305940121 -14.457384728035894, -29.523266208501887 -14.848196188198107 M-29.523266208501887 -14.848196188198107 C-29.284882740462024 -15.0383006603094, -29.04649927242216 -15.22840513242069, -28.54596784457872 -15.627565626425149 M-29.523266208501887 -14.848196188198107 C-29.139378633130566 -15.154336313879325, -28.755491057759244 -15.460476439560543, -28.54596784457872 -15.627565626425149 M-28.54596784457872 -15.627565626425149 C-28.319017466432346 -15.785876385696533, -28.092067088285972 -15.944187144967916, -27.52074307360571 -16.342718045390885 M-28.54596784457872 -15.627565626425149 C-28.29432021476029 -15.803104119336165, -28.04267258494186 -15.97864261224718, -27.52074307360571 -16.342718045390885 M-27.52074307360571 -16.342718045390885 C-27.290714852280168 -16.482162504954307, -27.060686630954624 -16.621606964517724, -26.45180476407679 -16.99071473040609 M-27.52074307360571 -16.342718045390885 C-27.25856282295582 -16.501653254077024, -26.99638257230593 -16.660588462763158, -26.45180476407679 -16.99071473040609 M-26.45180476407679 -16.99071473040609 C-26.178717862814324 -17.133183991874212, -25.905630961551857 -17.27565325334233, -25.343545412792388 -17.56889292409717 M-26.45180476407679 -16.99071473040609 C-26.087046602608186 -17.18100882960551, -25.722288441139582 -17.371302928804926, -25.343545412792388 -17.56889292409717 M-25.343545412792388 -17.56889292409717 C-24.995112791054986 -17.72313370985383, -24.646680169317584 -17.87737449561049, -24.200519095147804 -18.07487676824742 M-25.343545412792388 -17.56889292409717 C-25.095725400842298 -17.678595492068013, -24.847905388892208 -17.788298060038855, -24.200519095147804 -18.07487676824742 M-24.200519095147804 -18.07487676824742 C-23.847070554414564 -18.204949098479748, -23.49362201368133 -18.335021428712075, -23.02742275146062 -18.506587066708033 M-24.200519095147804 -18.07487676824742 C-23.868054686487497 -18.19722674390172, -23.535590277827193 -18.319576719556014, -23.02742275146062 -18.506587066708033 M-23.02742275146062 -18.506587066708033 C-22.640092391417937 -18.62154468443015, -22.252762031375255 -18.73650230215227, -21.829076886235413 -18.862249829261067 M-23.02742275146062 -18.506587066708033 C-22.58882616407676 -18.636760231603095, -22.150229576692904 -18.766933396498157, -21.829076886235413 -18.862249829261067 M-21.829076886235413 -18.862249829261067 C-21.535669769523533 -18.929218088990183, -21.242262652811654 -18.9961863487193, -20.610405759676766 -19.140403561325773 M-21.829076886235413 -18.862249829261067 C-21.565362269971303 -18.922440969524654, -21.301647653707192 -18.982632109788238, -20.610405759676766 -19.140403561325773 M-20.610405759676766 -19.140403561325773 C-20.299427796250562 -19.1906800667824, -19.988449832824355 -19.24095657223902, -19.376417152847882 -19.3399052695533 M-20.610405759676766 -19.140403561325773 C-20.305109915735805 -19.189761425769518, -19.999814071794844 -19.239119290213264, -19.376417152847882 -19.3399052695533 M-19.376417152847882 -19.3399052695533 C-19.092277616601447 -19.367315868887204, -18.808138080355015 -19.39472646822111, -18.132181789623903 -19.45993515863156 M-19.376417152847882 -19.3399052695533 C-18.896225096492604 -19.38622881971445, -18.41603304013732 -19.432552369875605, -18.132181789623903 -19.45993515863156 M-18.132181789623903 -19.45993515863156 C-17.6863938236282 -19.474230711027403, -17.2406058576325 -19.48852626342325, -16.882812500000007 -19.5 M-18.132181789623903 -19.45993515863156 C-17.686392020637772 -19.474230768845796, -17.24060225165164 -19.488526379060037, -16.882812500000007 -19.5 M-16.882812500000007 -19.5 C-16.882812500000007 -19.5, -16.882812500000004 -19.5, -16.8828125 -19.5 M-16.882812500000007 -19.5 C-16.882812500000004 -19.5, -16.8828125 -19.5, -16.8828125 -19.5"
                    stroke="#00000000"
                    strokeWidth={1.3}
                    fill="none"
                    strokeDasharray="0 0"
                    style={{}}
                  />
                </g>
                <g
                  className="label"
                  style={{}}
                  transform="translate(-24.0078125, -12)"
                >
                  <rect />
                  <foreignObject width={48.015625} height={24}>
                    <div
                      style={{
                        display: "table-cell",
                        whiteSpace: "nowrap",
                        lineHeight: 1.5,
                        maxWidth: 200,
                        textAlign: "center",
                      }}
                    >
                      <span className="nodeLabel markdown-node-label">
                        <p>
                          <em>{"START"}</em>
                        </p>
                      </span>
                    </div>
                  </foreignObject>
                </g>
              </g>
              <g
                className="node default"
                id="compiler_diagram-flowchart-source-1"
                data-look="classic"
                transform="translate(151.609375, 179)"
              >
                <polygon
                  points="-19.5,0 178.21875,0 197.71875,-39 0,-39"
                  className="label-container"
                  transform="translate(-89.109375,19.5)"
                />
                <g
                  className="label"
                  style={{}}
                  transform="translate(-81.609375, -12)"
                >
                  <rect />
                  <foreignObject width={163.21875} height={24}>
                    <div
                      style={{
                        display: "table-cell",
                        whiteSpace: "nowrap",
                        lineHeight: 1.5,
                        maxWidth: 200,
                        textAlign: "center",
                      }}
                    >
                      <span className="nodeLabel markdown-node-label">
                        <p>
                          <em>{"INPUT"}</em>
                          {" Source Code"}
                        </p>
                      </span>
                    </div>
                  </foreignObject>
                </g>
              </g>
              <g
                className="node default"
                id="compiler_diagram-flowchart-lexer-2"
                data-look="classic"
                transform="translate(151.609375, 325.5)"
              >
                <rect
                  className="basic label-container"
                  style={{}}
                  x={-54.0078125}
                  y={-27}
                  width={108.015625}
                  height={54}
                />
                <g
                  className="label"
                  style={{}}
                  transform="translate(-24.0078125, -12)"
                >
                  <rect />
                  <foreignObject width={48.015625} height={24}>
                    <div
                      style={{
                        display: "table-cell",
                        whiteSpace: "nowrap",
                        lineHeight: 1.5,
                        maxWidth: 200,
                        textAlign: "center",
                      }}
                    >
                      <span className="nodeLabel markdown-node-label">
                        <p>{"Lexer"}</p>
                      </span>
                    </div>
                  </foreignObject>
                </g>
              </g>
              <g
                className="node default"
                id="compiler_diagram-flowchart-parser-3"
                data-look="classic"
                transform="translate(151.609375, 479.5)"
              >
                <rect
                  className="basic label-container"
                  style={{}}
                  x={-58.8046875}
                  y={-27}
                  width={117.609375}
                  height={54}
                />
                <g
                  className="label"
                  style={{}}
                  transform="translate(-28.8046875, -12)"
                >
                  <rect />
                  <foreignObject width={57.609375} height={24}>
                    <div
                      style={{
                        display: "table-cell",
                        whiteSpace: "nowrap",
                        lineHeight: 1.5,
                        maxWidth: 200,
                        textAlign: "center",
                      }}
                    >
                      <span className="nodeLabel markdown-node-label">
                        <p>{"Parser"}</p>
                      </span>
                    </div>
                  </foreignObject>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
    <defs>
      <filter id="compiler_diagram-drop-shadow" height="130%" width="130%">
        <feDropShadow
          dx={4}
          dy={4}
          stdDeviation={0}
          floodOpacity={0.06}
          floodColor="#000000"
        />
      </filter>
    </defs>
    <defs>
      <filter
        id="compiler_diagram-drop-shadow-small"
        height="150%"
        width="150%"
      >
        <feDropShadow
          dx={2}
          dy={2}
          stdDeviation={0}
          floodOpacity={0.06}
          floodColor="#000000"
        />
      </filter>
    </defs>
    <linearGradient
      id="compiler_diagram-gradient"
      gradientUnits="objectBoundingBox"
      x1="0%"
      y1="0%"
      x2="100%"
      y2="0%"
    >
      <stop offset="0%" stopColor="#00000000" stopOpacity={1} />
      <stop
        offset="100%"
        stopColor="hsl(211.5789473684, 46.3636363636%, 81.3725490196%)"
        stopOpacity={1}
      />
    </linearGradient>
  </svg>
);

export default CompilerSVG;
