import type { SVGProps } from "react";

const InferenceSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="inference_diagram"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="flowchart"
    style={{
      maxWidth: "819.802px",
      backgroundColor: "transparent",
    }}
    viewBox="12 12 819.8020629882812 1501.40625"
    role="graphics-document document"
    aria-roledescription="flowchart-v2"
    {...props}
  >
    <style>
      {
        '#inference_diagram{font-family:"jetbrains-mono";font-size:16px;fill:#f5f5ff;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#inference_diagram .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#inference_diagram .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#inference_diagram .error-icon{fill:hsl(25.8461538462, 84.4155844156%, 89.9019607843%);}#inference_diagram .error-text{fill:rgb(4.012987013, 28.7597402597, 47.4870129871);stroke:rgb(4.012987013, 28.7597402597, 47.4870129871);}#inference_diagram .edge-thickness-normal{stroke-width:1px;}#inference_diagram .edge-thickness-thick{stroke-width:3.5px;}#inference_diagram .edge-pattern-solid{stroke-dasharray:0;}#inference_diagram .edge-thickness-invisible{stroke-width:0;fill:none;}#inference_diagram .edge-pattern-dashed{stroke-dasharray:3;}#inference_diagram .edge-pattern-dotted{stroke-dasharray:2;}#inference_diagram .marker{fill:#005180;stroke:#005180;}#inference_diagram .marker.cross{stroke:#005180;}#inference_diagram svg{font-family:"jetbrains-mono";font-size:16px;}#inference_diagram p{margin:0;}#inference_diagram .label{font-family:"jetbrains-mono";color:#00001f;}#inference_diagram .cluster-label text{fill:rgb(4.012987013, 28.7597402597, 47.4870129871);}#inference_diagram .cluster-label span{color:rgb(4.012987013, 28.7597402597, 47.4870129871);}#inference_diagram .cluster-label span p{background-color:transparent;}#inference_diagram .label text,#inference_diagram span{fill:#00001f;color:#00001f;}#inference_diagram .node rect,#inference_diagram .node circle,#inference_diagram .node ellipse,#inference_diagram .node polygon,#inference_diagram .node path{fill:#b8ddf9;stroke:#00000000;stroke-width:1px;}#inference_diagram .rough-node .label text,#inference_diagram .node .label text,#inference_diagram .image-shape .label,#inference_diagram .icon-shape .label{text-anchor:middle;}#inference_diagram .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#inference_diagram .rough-node .label,#inference_diagram .node .label,#inference_diagram .image-shape .label,#inference_diagram .icon-shape .label{text-align:center;}#inference_diagram .node.clickable{cursor:pointer;}#inference_diagram .root .anchor path{fill:#005180!important;stroke-width:0;stroke:#005180;}#inference_diagram .arrowheadPath{fill:#0b0b0b;}#inference_diagram .edgePaths .path{stroke:#005180;stroke-width:1px;}#inference_diagram .flowchart-link{stroke:#005180;fill:none;}#inference_diagram .edgeLabel{background-color:#d6e8fc;text-align:center;}#inference_diagram .edgeLabel p{background-color:#d6e8fc;}#inference_diagram .edgeLabel rect{background-color:#d6e8fc;fill:#d6e8fc;}#inference_diagram .labelBkg{background-color:rgba(214, 232, 252, 0.5);}#inference_diagram .cluster rect{fill:#e9f0fe;stroke:#00000000;stroke-width:1px;}#inference_diagram .cluster text{fill:rgb(4.012987013, 28.7597402597, 47.4870129871);}#inference_diagram .cluster span{color:rgb(4.012987013, 28.7597402597, 47.4870129871);}#inference_diagram .node .collapsed-indicator{fill:#00000000;stroke:none;opacity:0.6;}#inference_diagram .node .collapsed-separator{stroke:#00000000;stroke-width:0.75px;}#inference_diagram div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"jetbrains-mono";font-size:12px;background:hsl(25.8461538462, 84.4155844156%, 89.9019607843%);border:1px solid hsl(25.8461538462, 44.4155844156%, 79.9019607843%);border-radius:2px;pointer-events:none;z-index:100;}#inference_diagram .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#f5f5ff;}#inference_diagram rect.text{fill:none;stroke-width:0;}#inference_diagram .icon-shape,#inference_diagram .image-shape{background-color:#d6e8fc;text-align:center;}#inference_diagram .icon-shape p,#inference_diagram .image-shape p{background-color:#d6e8fc;padding:2px;}#inference_diagram .icon-shape .label rect,#inference_diagram .image-shape .label rect{opacity:0.5;background-color:#d6e8fc;fill:#d6e8fc;}#inference_diagram .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#inference_diagram .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#inference_diagram .node .neo-node{stroke:#00000000;}#inference_diagram [data-look="neo"].node rect,#inference_diagram [data-look="neo"].cluster rect,#inference_diagram [data-look="neo"].node polygon{stroke:url(#inference_diagram-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#inference_diagram [data-look="neo"].swimlane.cluster rect{filter:none;}#inference_diagram [data-look="neo"].node path{stroke:url(#inference_diagram-gradient);stroke-width:1px;}#inference_diagram [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#inference_diagram [data-look="neo"].node .neo-line path{stroke:#00000000;filter:none;}#inference_diagram [data-look="neo"].node circle{stroke:url(#inference_diagram-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#inference_diagram [data-look="neo"].node circle .state-start{fill:#000000;}#inference_diagram [data-look="neo"].icon-shape .icon{fill:url(#inference_diagram-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#inference_diagram [data-look="neo"].icon-shape .icon-neo path{stroke:url(#inference_diagram-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}'
      }
    </style>
    <g>
      <marker
        id="inference_diagram_flowchart-v2-pointEnd"
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
        id="inference_diagram_flowchart-v2-pointStart"
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
        id="inference_diagram_flowchart-v2-pointEnd-margin"
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
        id="inference_diagram_flowchart-v2-pointStart-margin"
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
        id="inference_diagram_flowchart-v2-circleEnd"
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
        id="inference_diagram_flowchart-v2-circleStart"
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
        id="inference_diagram_flowchart-v2-circleEnd-margin"
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
        id="inference_diagram_flowchart-v2-circleStart-margin"
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
        id="inference_diagram_flowchart-v2-crossEnd"
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
        id="inference_diagram_flowchart-v2-crossStart"
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
        id="inference_diagram_flowchart-v2-crossEnd-margin"
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
        id="inference_diagram_flowchart-v2-crossStart-margin"
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
        <g className="edges edgePath">
          <path
            d="M239.8359375,51.5L239.5859375,51.25Q239.3359375,51 239.3359375,51.35355339059328L239.3359375,87"
            id="inference_diagram-e1"
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
            style={{}}
            data-edge="true"
            data-et="edge"
            data-id="e1"
            data-points="W3sieCI6MjM5LjgzNTkzNzUsInkiOjUxLjV9LHsieCI6MjM5LjMzNTkzNzUsInkiOjUxfSx7IngiOjIzOS4zMzU5Mzc1LCJ5Ijo5MX1d"
            data-look="classic"
            markerEnd="url(#inference_diagram_flowchart-v2-pointEnd)"
          />
          <path
            d="M239.8359375,178.5L239.5859375,178.25Q239.3359375,178 239.3359375,178.35355339059328L239.3359375,214"
            id="inference_diagram-e2"
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
            style={{}}
            data-edge="true"
            data-et="edge"
            data-id="e2"
            data-points="W3sieCI6MjM5LjgzNTkzNzUsInkiOjE3OC41fSx7IngiOjIzOS4zMzU5Mzc1LCJ5IjoxNzh9LHsieCI6MjM5LjMzNTkzNzUsInkiOjIxOH1d"
            data-look="classic"
            markerEnd="url(#inference_diagram_flowchart-v2-pointEnd)"
          />
          <path
            d="M197.33333333333331,272L197.33333333333331,308"
            id="inference_diagram-e3"
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
            style={{}}
            data-edge="true"
            data-et="edge"
            data-id="e3"
            data-points="W3sieCI6MTk3LjMzMzMzMzMzMzMzMzMxLCJ5IjoyNzJ9LHsieCI6MTk3LjMzMzMzMzMzMzMzMzMxLCJ5IjozMTJ9XQ=="
            data-look="classic"
            markerEnd="url(#inference_diagram_flowchart-v2-pointEnd)"
          />
          <path
            d="M162.58333333333337,555.25L156.79166666666669,572.625Q151,590 151,608.3148581151419L151,753.703125"
            id="inference_diagram-e4"
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
            style={{}}
            data-edge="true"
            data-et="edge"
            data-id="e4"
            data-points="W3sieCI6MTYyLjU4MzMzMzMzMzMzMzM3LCJ5Ijo1NTUuMjV9LHsieCI6MTUxLCJ5Ijo1OTB9LHsieCI6MTUxLCJ5Ijo3NTcuNzAzMTI1fV0="
            data-look="classic"
            markerEnd="url(#inference_diagram_flowchart-v2-pointEnd)"
          />
          <path
            d="M151.5,821.203125L151.25,820.953125Q151,820.703125 151,821.0566783905932L151,935.90625L151,1127.40625L151,1318.90625L151,1402.90625L151,1447.3351821881345Q151,1454.40625 158.07106781186548,1454.40625L323.6136293393186,1454.40625Q330.6846971511841,1454.40625 330.6846971511841,1461.4773178118655L330.6846971511841,1470.40625"
            id="inference_diagram-e5"
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
            style={{}}
            data-edge="true"
            data-et="edge"
            data-id="e5"
            data-points="W3sieCI6MTUxLjUsInkiOjgyMS4yMDMxMjV9LHsieCI6MTUxLCJ5Ijo4MjAuNzAzMTI1fSx7IngiOjE1MSwieSI6OTM1LjkwNjI1fSx7IngiOjE1MSwieSI6MTEyNy40MDYyNX0seyJ4IjoxNTEsInkiOjEzMTguOTA2MjV9LHsieCI6MTUxLCJ5IjoxNDAyLjkwNjI1fSx7IngiOjE1MSwieSI6MTQ1NC40MDYyNX0seyJ4IjozMzAuNjg0Njk3MTUxMTg0MSwieSI6MTQ1NC40MDYyNX0seyJ4IjozMzAuNjg0Njk3MTUxMTg0MSwieSI6MTQ3NC40MDYyNX1d"
            data-look="classic"
            markerEnd="url(#inference_diagram_flowchart-v2-pointEnd)"
          />
          <path
            d="M232.0833333333333,555.25L240.50438900649826,580.5131670194949Q243.66666666666666,590 243.66666666666666,600L243.66666666666666,602.9289321881345Q243.66666666666666,610 250.73773447853213,610L417.1320571881345,610Q424.203125,610 424.203125,617.0710678118655L424.203125,691"
            id="inference_diagram-e6"
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
            style={{}}
            data-edge="true"
            data-et="edge"
            data-id="e6"
            data-points="W3sieCI6MjMyLjA4MzMzMzMzMzMzMzMsInkiOjU1NS4yNX0seyJ4IjoyNDMuNjY2NjY2NjY2NjY2NjYsInkiOjU5MH0seyJ4IjoyNDMuNjY2NjY2NjY2NjY2NjYsInkiOjYxMH0seyJ4Ijo0MjQuMjAzMTI1LCJ5Ijo2MTB9LHsieCI6NDI0LjIwMzEyNSwieSI6Njk1fV0="
            data-look="classic"
            markerEnd="url(#inference_diagram_flowchart-v2-pointEnd)"
          />
          <path
            d="M400.6523437499997,859.8554687499998L396.7272135416665,871.6308593749999Q392.8020833333333,883.40625 392.8020833333333,895.8186015710646L392.80208333333337,984.40625"
            id="inference_diagram-e7"
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
            style={{}}
            data-edge="true"
            data-et="edge"
            data-id="e7"
            data-points="W3sieCI6NDAwLjY1MjM0Mzc0OTk5OTcsInkiOjg1OS44NTU0Njg3NDk5OTk4fSx7IngiOjM5Mi44MDIwODMzMzMzMzMzLCJ5Ijo4ODMuNDA2MjV9LHsieCI6MzkyLjgwMjA4MzMzMzMzMzM3LCJ5Ijo5ODguNDA2MjV9XQ=="
            data-look="classic"
            markerEnd="url(#inference_diagram_flowchart-v2-pointEnd)"
          />
          <path
            d="M358.05208333333337,1231.65625L352.2604166666667,1249.03125Q346.46875,1266.40625 346.46875,1284.7211081151418L346.46875,1367.40625"
            id="inference_diagram-e8"
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
            style={{}}
            data-edge="true"
            data-et="edge"
            data-id="e8"
            data-points="W3sieCI6MzU4LjA1MjA4MzMzMzMzMzM3LCJ5IjoxMjMxLjY1NjI1fSx7IngiOjM0Ni40Njg3NSwieSI6MTI2Ni40MDYyNX0seyJ4IjozNDYuNDY4NzUsInkiOjEzNzEuNDA2MjV9XQ=="
            data-look="classic"
            markerEnd="url(#inference_diagram_flowchart-v2-pointEnd)"
          />
          <path
            d="M346.96875,1434.90625L346.71875,1434.65625Q346.46875,1434.40625 346.46875,1434.7598033905933L346.46875,1470.40625"
            id="inference_diagram-e9"
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
            style={{}}
            data-edge="true"
            data-et="edge"
            data-id="e9"
            data-points="W3sieCI6MzQ2Ljk2ODc1LCJ5IjoxNDM0LjkwNjI1fSx7IngiOjM0Ni40Njg3NSwieSI6MTQzNC40MDYyNX0seyJ4IjozNDYuNDY4NzUsInkiOjE0NzQuNDA2MjV9XQ=="
            data-look="classic"
            markerEnd="url(#inference_diagram_flowchart-v2-pointEnd)"
          />
          <path
            d="M427.5520833333334,1231.6562500000002L435.9731390064983,1256.9194170194949Q439.1354166666667,1266.40625 439.1354166666667,1276.40625L439.1354166666667,1279.3351821881345Q439.1354166666667,1286.40625 446.20648447853216,1286.40625L617.4054946881345,1286.40625Q624.4765625,1286.40625 624.4765625,1293.4773178118655L624.4765625,1379.40625"
            id="inference_diagram-e10"
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
            style={{}}
            data-edge="true"
            data-et="edge"
            data-id="e10"
            data-points="W3sieCI6NDI3LjU1MjA4MzMzMzMzMzQsInkiOjEyMzEuNjU2MjUwMDAwMDAwMn0seyJ4Ijo0MzkuMTM1NDE2NjY2NjY2NywieSI6MTI2Ni40MDYyNX0seyJ4Ijo0MzkuMTM1NDE2NjY2NjY2NywieSI6MTI4Ni40MDYyNX0seyJ4Ijo2MjQuNDc2NTYyNSwieSI6MTI4Ni40MDYyNX0seyJ4Ijo2MjQuNDc2NTYyNSwieSI6MTM4My40MDYyNX1d"
            data-look="classic"
            markerEnd="url(#inference_diagram_flowchart-v2-pointEnd)"
          />
          <path
            d="M624.9765625,1422.90625L624.7265625,1422.65625Q624.4765625,1422.40625 624.4765625,1422.7598033905933L624.4765625,1447.3351821881345Q624.4765625,1454.40625 617.4054946881345,1454.40625L369.3238706606814,1454.40625Q362.2528028488159,1454.40625 362.2528028488159,1461.4773178118655L362.2528028488159,1470.40625"
            id="inference_diagram-e11"
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
            style={{}}
            data-edge="true"
            data-et="edge"
            data-id="e11"
            data-points="W3sieCI6NjI0Ljk3NjU2MjUsInkiOjE0MjIuOTA2MjV9LHsieCI6NjI0LjQ3NjU2MjUsInkiOjE0MjIuNDA2MjV9LHsieCI6NjI0LjQ3NjU2MjUsInkiOjE0NTQuNDA2MjV9LHsieCI6MzYyLjI1MjgwMjg0ODgxNTksInkiOjE0NTQuNDA2MjV9LHsieCI6MzYyLjI1MjgwMjg0ODgxNTksInkiOjE0NzQuNDA2MjV9XQ=="
            data-look="classic"
            markerEnd="url(#inference_diagram_flowchart-v2-pointEnd)"
          />
          <path
            d="M447.75390624999994,859.85546875L452.4418890064983,873.9194170194949Q455.6041666666667,883.40625 455.6041666666667,893.40625L455.6041666666667,896.3351821881345Q455.6041666666667,903.40625 462.67523447853216,903.40625L651.3976821881345,903.40625Q658.46875,903.40625 658.46875,910.4773178118655L658.46875,984.40625"
            id="inference_diagram-e12"
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
            style={{}}
            data-edge="true"
            data-et="edge"
            data-id="e12"
            data-points="W3sieCI6NDQ3Ljc1MzkwNjI0OTk5OTk0LCJ5Ijo4NTkuODU1NDY4NzV9LHsieCI6NDU1LjYwNDE2NjY2NjY2NjcsInkiOjg4My40MDYyNX0seyJ4Ijo0NTUuNjA0MTY2NjY2NjY2NywieSI6OTAzLjQwNjI1fSx7IngiOjY1OC40Njg3NSwieSI6OTAzLjQwNjI1fSx7IngiOjY1OC40Njg3NSwieSI6OTg4LjQwNjI1fV0="
            data-look="classic"
            markerEnd="url(#inference_diagram_flowchart-v2-pointEnd)"
          />
          <path
            d="M745.1354166666667,988.40625L745.1354166666667,975.4773178118655Q745.1354166666667,968.40625 738.0643488548012,968.40625L701.8523178118655,968.40625Q694.78125,968.40625 694.78125,961.3351821881345L694.78125,935.90625L694.78125,789.203125L694.78125,642.5L694.78125,451L694.78125,299.0710678118655Q694.78125,292 687.7101821881345,292L288.4096094785321,292Q281.33854166666663,292 281.33854166666663,284.9289321881345L281.33854166666663,276"
            id="inference_diagram-e13"
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link edge-animation-fast"
            style={{}}
            data-edge="true"
            data-et="edge"
            data-id="e13"
            data-points="W3sieCI6NzQ1LjEzNTQxNjY2NjY2NjcsInkiOjk4OC40MDYyNX0seyJ4Ijo3NDUuMTM1NDE2NjY2NjY2NywieSI6OTY4LjQwNjI1fSx7IngiOjY5NC43ODEyNSwieSI6OTY4LjQwNjI1fSx7IngiOjY5NC43ODEyNSwieSI6OTM1LjkwNjI1fSx7IngiOjY5NC43ODEyNSwieSI6Nzg5LjIwMzEyNX0seyJ4Ijo2OTQuNzgxMjUsInkiOjY0Mi41fSx7IngiOjY5NC43ODEyNSwieSI6NDUxfSx7IngiOjY5NC43ODEyNSwieSI6MjkyfSx7IngiOjI4MS4zMzg1NDE2NjY2NjY2MywieSI6MjkyfSx7IngiOjI4MS4zMzg1NDE2NjY2NjY2MywieSI6MjcyfV0="
            data-look="classic"
            markerEnd="url(#inference_diagram_flowchart-v2-pointEnd)"
          />
        </g>
        <g className="edgeLabels">
          <g className="edgeLabel" transform="translate(150.6015625, 642.5)">
            <g className="label" data-id="e4" transform="translate(0, -10.5)">
              <g>
                <rect
                  className="background"
                  style={{}}
                  x={-11.6015625}
                  y={-2}
                  width={23.203125}
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
                      {"No"}
                    </tspan>
                  </tspan>
                </text>
              </g>
            </g>
          </g>
          <g className="edgeLabel" transform="translate(424.109375, 642.5)">
            <g className="label" data-id="e6" transform="translate(0, -10.5)">
              <g>
                <rect
                  className="background"
                  style={{}}
                  x={-16.40625}
                  y={-2}
                  width={32.8125}
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
                      {"Yes"}
                    </tspan>
                  </tspan>
                </text>
              </g>
            </g>
          </g>
          <g
            className="edgeLabel"
            transform="translate(392.40364583333337, 935.90625)"
          >
            <g className="label" data-id="e7" transform="translate(0, -10.5)">
              <g>
                <rect
                  className="background"
                  style={{}}
                  x={-11.6015625}
                  y={-2}
                  width={23.203125}
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
                      {"No"}
                    </tspan>
                  </tspan>
                </text>
              </g>
            </g>
          </g>
          <g
            className="edgeLabel"
            transform="translate(346.0703125, 1318.90625)"
          >
            <g className="label" data-id="e8" transform="translate(0, -10.5)">
              <g>
                <rect
                  className="background"
                  style={{}}
                  x={-11.6015625}
                  y={-2}
                  width={23.203125}
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
                      {"No"}
                    </tspan>
                  </tspan>
                </text>
              </g>
            </g>
          </g>
          <g
            className="edgeLabel"
            transform="translate(624.3828125, 1318.90625)"
          >
            <g className="label" data-id="e10" transform="translate(0, -10.5)">
              <g>
                <rect
                  className="background"
                  style={{}}
                  x={-16.40625}
                  y={-2}
                  width={32.8125}
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
                      {"Yes"}
                    </tspan>
                  </tspan>
                </text>
              </g>
            </g>
          </g>
          <g className="edgeLabel" transform="translate(658.375, 935.90625)">
            <g className="label" data-id="e12" transform="translate(0, -10.5)">
              <g>
                <rect
                  className="background"
                  style={{}}
                  x={-16.40625}
                  y={-2}
                  width={32.8125}
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
                      {"Yes"}
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
            id="inference_diagram-flowchart-start-0"
            data-look="classic"
            transform="translate(239.3359375, 31.5)"
          >
            <g className="basic label-container outer-path">
              <path
                d="M-16.8828125 -19.5 C-6.357521237635973 -19.5, 4.167770024728053 -19.5, 16.8828125 -19.5 C16.8828125 -19.5, 16.8828125 -19.5, 16.8828125 -19.5 C17.147186826188232 -19.49152202993255, 17.411561152376464 -19.483044059865104, 18.1321817896239 -19.45993515863156 C18.448475977492095 -19.429422638727328, 18.764770165360293 -19.3989101188231, 19.376417152847864 -19.3399052695533 C19.76283761178818 -19.277431806487247, 20.14925807072849 -19.21495834342119, 20.61040575967676 -19.140403561325776 C21.02559652786856 -19.045638977858964, 21.440787296060368 -18.950874394392148, 21.82907688623539 -18.862249829261074 C22.286275558566235 -18.726555663198084, 22.743474230897075 -18.590861497135094, 23.027422751460602 -18.50658706670804 C23.425607055902017 -18.36005156189824, 23.823791360343428 -18.213516057088437, 24.200519095147794 -18.074876768247425 C24.446382260073026 -17.96604043840668, 24.69224542499826 -17.857204108565938, 25.34354541279238 -17.568892924097174 C25.57097507410106 -17.450243015468086, 25.798404735409743 -17.331593106838998, 26.451804764076783 -16.990714730406097 C26.679444767409592 -16.852718022624597, 26.907084770742404 -16.7147213148431, 27.520743073605697 -16.342718045390892 C27.836828185978547 -16.122230754103573, 28.1529132983514 -15.901743462816254, 28.545967844578712 -15.627565626425154 C28.871127851135267 -15.368259174067475, 29.196287857691818 -15.108952721709795, 29.52326620850187 -14.848196188198123 C29.711104793273837 -14.677606155444833, 29.8989433780458 -14.507016122691544, 30.448622236767985 -14.007812326905688 C30.789369723832323 -13.65596257062279, 31.130117210896657 -13.304112814339895, 31.318233442968648 -13.10986736009568 C31.6168226228834 -12.759127519162167, 31.91541180279815 -12.408387678228653, 32.12852640812658 -12.158051136245305 C32.34110926791569 -11.873209470824838, 32.5536921277048 -11.58836780540437, 32.876171464640635 -11.156274872382312 C33.11627427902352 -10.787412472856955, 33.35637709340641 -10.4185500733316, 33.55809637860425 -10.108655082055241 C33.73385628487636 -9.796575570848686, 33.90961619114848 -9.48449605964213, 34.171498974273504 -9.019496659696287 C34.302474514043816 -8.747523148935619, 34.433450053814134 -8.475549638174948, 34.71385864880834 -7.893275190886684 C34.87882071662692 -7.485815694050188, 35.0437827844455 -7.078356197213691, 35.182946729970325 -6.734618561215508 C35.311524032751315 -6.347364211250307, 35.440101335532304 -5.960109861285106, 35.57683563421488 -5.548287939305138 C35.70232362700425 -5.069747835959177, 35.827811619793614 -4.591207732613216, 35.89390678754556 -4.339158212148133 C35.979219454248465 -3.9010956994672017, 36.06453212095137 -3.4630331867862707, 36.132857276581774 -3.1121979531509023 C36.18634538515981 -2.697354745441388, 36.23983349373785 -2.2825115377318737, 36.29270520250937 -1.872449005199798 C36.319362024101295 -1.4572474919063658, 36.34601884569323 -1.0420459786129337, 36.37279371591342 -0.6250057626472757 C36.37279371591342 -0.25742817554807423, 36.37279371591342 0.11014941155112723, 36.37279371591342 0.625005762647271 C36.349317027425656 0.9906741358860157, 36.325840338937894 1.3563425091247603, 36.29270520250937 1.8724490051997846 C36.24021816568478 2.279528098073494, 36.1877311288602 2.6866071909472033, 36.132857276581774 3.1121979531508885 C36.077010650883686 3.398958572922038, 36.021164025185605 3.6857191926931883, 35.89390678754556 4.339158212148129 C35.82067824809922 4.618410370506788, 35.74744970865288 4.897662528865448, 35.57683563421489 5.548287939305125 C35.43309276241255 5.981218566857343, 35.289349890610204 6.414149194409561, 35.182946729970325 6.734618561215495 C35.04517754317454 7.074911116187119, 34.907408356378745 7.415203671158744, 34.71385864880834 7.893275190886679 C34.54619642764073 8.241429380538072, 34.37853420647311 8.589583570189466, 34.171498974273504 9.019496659696284 C33.98039740715104 9.358816843254255, 33.78929584002857 9.698137026812228, 33.55809637860425 10.108655082055236 C33.39904081481348 10.353007140437034, 33.23998525102271 10.59735919881883, 32.87617146464064 11.156274872382301 C32.72452601188927 11.359465963884189, 32.5728805591379 11.562657055386076, 32.12852640812658 12.158051136245302 C31.954821381884017 12.362094944165818, 31.781116355641448 12.566138752086335, 31.31823344296866 13.10986736009567 C31.02967636823315 13.40782623073651, 30.74111929349764 13.705785101377352, 30.44862223676799 14.007812326905684 C30.221895615218575 14.213719445739184, 29.995168993669164 14.419626564572681, 29.523266208501887 14.848196188198111 C29.274024814013785 15.046959567710314, 29.024783419525683 15.245722947222516, 28.545967844578715 15.627565626425152 C28.24415577537703 15.838096660666347, 27.942343706175347 16.04862769490754, 27.520743073605708 16.34271804539089 C27.300049562397845 16.476503748824125, 27.07935605118998 16.610289452257362, 26.451804764076787 16.990714730406093 C26.05554081337676 17.197445379667123, 25.659276862676734 17.404176028928152, 25.343545412792388 17.56889292409717 C25.04025075147621 17.703152473745373, 24.73695609016004 17.83741202339358, 24.200519095147804 18.07487676824742 C23.86446178655557 18.19854896428907, 23.528404477963335 18.322221160330717, 23.027422751460616 18.506587066708033 C22.67863443023973 18.610105609619136, 22.32984610901884 18.713624152530237, 21.829076886235413 18.86224982926107 C21.48395856113318 18.941020834858115, 21.13884023603094 19.019791840455156, 20.610405759676766 19.140403561325773 C20.25653825733237 19.19761411482135, 19.902670754987973 19.254824668316925, 19.37641715284788 19.3399052695533 C18.91622914652767 19.38429905306596, 18.45604114020746 19.428692836578616, 18.1321817896239 19.45993515863156 C17.735631067819416 19.472651768440674, 17.33908034601493 19.485368378249788, 16.882812500000004 19.5 C16.882812500000004 19.5, 16.882812500000004 19.5, 16.8828125 19.5 C6.406104804880735 19.5, -4.070602890238529 19.5, -16.882812499999996 19.5 C-17.185489280904896 19.490293744760994, -17.4881660618098 19.480587489521987, -18.132181789623893 19.45993515863156 C-18.49860142077753 19.42458709749825, -18.865021051931162 19.389239036364938, -19.37641715284787 19.3399052695533 C-19.751089320731936 19.27933117907586, -20.125761488616003 19.218757088598423, -20.61040575967676 19.140403561325773 C-20.9389436075218 19.065416941464957, -21.26748145536684 18.990430321604144, -21.829076886235388 18.862249829261074 C-22.131739095612012 18.77242127422445, -22.434401304988636 18.682592719187824, -23.02742275146059 18.506587066708043 C-23.46735871241121 18.34468656635477, -23.907294673361836 18.1827860660015, -24.200519095147797 18.074876768247425 C-24.545329036523714 17.9222396356238, -24.890138977899632 17.769602503000176, -25.34354541279238 17.568892924097174 C-25.710226339855815 17.377595719318524, -26.076907266919246 17.186298514539875, -26.45180476407678 16.990714730406097 C-26.832896885696467 16.75969444673435, -27.21398900731615 16.528674163062604, -27.520743073605686 16.3427180453909 C-27.859231719463658 16.106603018977694, -28.197720365321633 15.87048799256449, -28.545967844578712 15.627565626425156 C-28.884746324393547 15.357398804046792, -29.223524804208378 15.087231981668427, -29.52326620850187 14.848196188198125 C-29.889759520959675 14.51535665870562, -30.25625283341748 14.182517129213117, -30.448622236767974 14.007812326905697 C-30.79010340873529 13.655204980723823, -31.131584580702608 13.302597634541952, -31.318233442968655 13.109867360095677 C-31.489968967420893 12.908137041045906, -31.66170449187313 12.706406721996135, -32.128526408126575 12.158051136245307 C-32.38478558038065 11.814687191115702, -32.641044752634734 11.471323245986095, -32.876171464640635 11.156274872382316 C-33.04993161059047 10.889332627071008, -33.223691756540305 10.622390381759699, -33.55809637860425 10.108655082055249 C-33.71781531351703 9.825057939821669, -33.87753424842982 9.541460797588089, -34.171498974273504 9.019496659696289 C-34.38347949216175 8.579314578644867, -34.59546001004999 8.139132497593446, -34.71385864880834 7.893275190886686 C-34.84078107670239 7.579774340110178, -34.967703504596436 7.266273489333669, -35.182946729970325 6.73461856121551 C-35.31546834492764 6.335484571416021, -35.44798995988495 5.936350581616533, -35.57683563421488 5.5482879393051325 C-35.64995798185521 5.269440736326612, -35.723080329495545 4.9905935333480915, -35.89390678754556 4.339158212148136 C-35.97333936009366 3.931288740193805, -36.052771932641754 3.523419268239474, -36.132857276581774 3.112197953150904 C-36.16891705896673 2.832525401782688, -36.20497684135167 2.552852850414472, -36.29270520250937 1.872449005199809 C-36.31828174332215 1.474073737028501, -36.34385828413494 1.0756984688571931, -36.37279371591342 0.6250057626472781 C-36.37279371591342 0.26029311521656856, -36.37279371591342 -0.10441953221414102, -36.37279371591342 -0.6250057626472687 C-36.35466455429494 -0.9073820884509157, -36.33653539267646 -1.1897584142545627, -36.29270520250937 -1.8724490051997822 C-36.23762664728743 -2.2996274030102217, -36.18254809206548 -2.726805800820661, -36.132857276581774 -3.112197953150895 C-36.045993655263615 -3.5582242899867778, -35.959130033945456 -4.00425062682266, -35.89390678754556 -4.339158212148126 C-35.81932774467581 -4.623560425372139, -35.74474870180605 -4.9079626385961515, -35.57683563421489 -5.548287939305123 C-35.44598862423037 -5.9423782857386325, -35.31514161424584 -6.336468632172142, -35.18294672997033 -6.734618561215485 C-35.08757514954574 -6.970188208748297, -34.992203569121145 -7.205757856281108, -34.71385864880834 -7.893275190886676 C-34.5647125590236 -8.202980237539803, -34.41556646923885 -8.51268528419293, -34.171498974273504 -9.019496659696282 C-33.98881987832778 -9.343861892812255, -33.806140782382066 -9.668227125928226, -33.55809637860425 -10.108655082055243 C-33.332813805081486 -10.454749611827548, -33.10753123155873 -10.800844141599855, -32.87617146464064 -11.156274872382308 C-32.66641406991384 -11.437330672024444, -32.45665667518705 -11.718386471666578, -32.12852640812659 -12.158051136245302 C-31.80674616176775 -12.536032523433102, -31.484965915408917 -12.914013910620902, -31.318233442968662 -13.10986736009567 C-30.98587256460045 -13.45305725434644, -30.653511686232232 -13.79624714859721, -30.448622236767996 -14.007812326905677 C-30.134757365667806 -14.292856098429448, -29.820892494567616 -14.577899869953217, -29.523266208501887 -14.848196188198107 C-29.14772746711383 -15.147678340949476, -28.77218872572577 -15.447160493700846, -28.54596784457872 -15.627565626425149 C-28.259117847110463 -15.82765976712275, -27.972267849642208 -16.02775390782035, -27.52074307360571 -16.342718045390885 C-27.112647393798113 -16.590108044726666, -26.704551713990515 -16.837498044062446, -26.45180476407679 -16.99071473040609 C-26.16333892362601 -17.141207174598073, -25.87487308317523 -17.291699618790055, -25.343545412792388 -17.56889292409717 C-24.899925913040278 -17.765270117132527, -24.45630641328817 -17.961647310167884, -24.200519095147804 -18.07487676824742 C-23.907398699963444 -18.182747783250495, -23.614278304779084 -18.290618798253572, -23.02742275146062 -18.506587066708033 C-22.75855223608723 -18.58638642434072, -22.489681720713843 -18.666185781973404, -21.829076886235413 -18.862249829261067 C-21.507467382304707 -18.935655099835106, -21.185857878374 -19.00906037040914, -20.610405759676766 -19.140403561325773 C-20.261199395748505 -19.196860538109895, -19.91199303182025 -19.253317514894018, -19.376417152847882 -19.3399052695533 C-19.01999552120084 -19.37428883569856, -18.6635738895538 -19.408672401843823, -18.132181789623903 -19.45993515863156 C-17.72772759443181 -19.472905217449036, -17.323273399239717 -19.485875276266512, -16.882812500000007 -19.5 C-16.882812500000004 -19.5, -16.882812500000004 -19.5, -16.8828125 -19.5"
                stroke="none"
                strokeWidth={0}
                fill="#b8ddf9"
                style={{}}
              />
              <path
                d="M-16.8828125 -19.5 C-3.6000684202786957 -19.5, 9.682675659442609 -19.5, 16.8828125 -19.5 M-16.8828125 -19.5 C-7.275889032418405 -19.5, 2.3310344351631898 -19.5, 16.8828125 -19.5 M16.8828125 -19.5 C16.8828125 -19.5, 16.8828125 -19.5, 16.8828125 -19.5 M16.8828125 -19.5 C16.8828125 -19.5, 16.8828125 -19.5, 16.8828125 -19.5 M16.8828125 -19.5 C17.341709109638188 -19.48528407891697, 17.80060571927638 -19.470568157833934, 18.1321817896239 -19.45993515863156 M16.8828125 -19.5 C17.364402935629244 -19.48455633208829, 17.845993371258484 -19.469112664176574, 18.1321817896239 -19.45993515863156 M18.1321817896239 -19.45993515863156 C18.60541163909407 -19.414283244195335, 19.078641488564234 -19.368631329759108, 19.376417152847864 -19.3399052695533 M18.1321817896239 -19.45993515863156 C18.38219905259324 -19.43581629396266, 18.63221631556258 -19.411697429293756, 19.376417152847864 -19.3399052695533 M19.376417152847864 -19.3399052695533 C19.640663154675874 -19.297184025236096, 19.904909156503887 -19.254462780918896, 20.61040575967676 -19.140403561325776 M19.376417152847864 -19.3399052695533 C19.830752302837872 -19.266451885924624, 20.285087452827884 -19.192998502295954, 20.61040575967676 -19.140403561325776 M20.61040575967676 -19.140403561325776 C20.94035985903764 -19.065093691298376, 21.270313958398518 -18.989783821270976, 21.82907688623539 -18.862249829261074 M20.61040575967676 -19.140403561325776 C20.916796309454185 -19.07047191772427, 21.223186859231607 -19.00054027412276, 21.82907688623539 -18.862249829261074 M21.82907688623539 -18.862249829261074 C22.200470436872028 -18.75202217291665, 22.571863987508664 -18.641794516572226, 23.027422751460602 -18.50658706670804 M21.82907688623539 -18.862249829261074 C22.143685507612428 -18.768875641850723, 22.45829412898947 -18.675501454440372, 23.027422751460602 -18.50658706670804 M23.027422751460602 -18.50658706670804 C23.436396149206175 -18.356081075829024, 23.845369546951744 -18.205575084950006, 24.200519095147794 -18.074876768247425 M23.027422751460602 -18.50658706670804 C23.34271346422961 -18.390557169893643, 23.658004176998617 -18.27452727307925, 24.200519095147794 -18.074876768247425 M24.200519095147794 -18.074876768247425 C24.485453313070778 -17.948744842246185, 24.77038753099376 -17.822612916244946, 25.34354541279238 -17.568892924097174 M24.200519095147794 -18.074876768247425 C24.482079424507692 -17.950238362630216, 24.763639753867587 -17.825599957013004, 25.34354541279238 -17.568892924097174 M25.34354541279238 -17.568892924097174 C25.583920482119716 -17.443489404396683, 25.824295551447054 -17.318085884696192, 26.451804764076783 -16.990714730406097 M25.34354541279238 -17.568892924097174 C25.626226995949068 -17.421418123230527, 25.908908579105752 -17.27394332236388, 26.451804764076783 -16.990714730406097 M26.451804764076783 -16.990714730406097 C26.871786726588294 -16.736119196643653, 27.291768689099808 -16.481523662881205, 27.520743073605697 -16.342718045390892 M26.451804764076783 -16.990714730406097 C26.81641602602117 -16.7696852407218, 27.18102728796556 -16.548655751037497, 27.520743073605697 -16.342718045390892 M27.520743073605697 -16.342718045390892 C27.7370543078286 -16.191828692359405, 27.953365542051504 -16.040939339327917, 28.545967844578712 -15.627565626425154 M27.520743073605697 -16.342718045390892 C27.743431316343283 -16.18738036727581, 27.96611955908087 -16.03204268916073, 28.545967844578712 -15.627565626425154 M28.545967844578712 -15.627565626425154 C28.887234074270697 -15.355414889721565, 29.228500303962683 -15.083264153017977, 29.52326620850187 -14.848196188198123 M28.545967844578712 -15.627565626425154 C28.78797541042134 -15.434571032757452, 29.029982976263966 -15.241576439089751, 29.52326620850187 -14.848196188198123 M29.52326620850187 -14.848196188198123 C29.71129204536551 -14.677436098049592, 29.899317882229152 -14.506676007901062, 30.448622236767985 -14.007812326905688 M29.52326620850187 -14.848196188198123 C29.74562767841662 -14.646253384583641, 29.967989148331373 -14.44431058096916, 30.448622236767985 -14.007812326905688 M30.448622236767985 -14.007812326905688 C30.78159252360238 -13.66399316838022, 31.114562810436777 -13.32017400985475, 31.318233442968648 -13.10986736009568 M30.448622236767985 -14.007812326905688 C30.657962557377182 -13.791651258716731, 30.86730287798638 -13.575490190527775, 31.318233442968648 -13.10986736009568 M31.318233442968648 -13.10986736009568 C31.60503120303455 -12.77297839186742, 31.891828963100455 -12.436089423639162, 32.12852640812658 -12.158051136245305 M31.318233442968648 -13.10986736009568 C31.608966573338897 -12.768355681979022, 31.899699703709146 -12.426844003862364, 32.12852640812658 -12.158051136245305 M32.12852640812658 -12.158051136245305 C32.34271706283587 -11.87105517210493, 32.55690771754515 -11.584059207964556, 32.876171464640635 -11.156274872382312 M32.12852640812658 -12.158051136245305 C32.28253425032197 -11.951694658106538, 32.436542092517364 -11.745338179967769, 32.876171464640635 -11.156274872382312 M32.876171464640635 -11.156274872382312 C33.054772539880226 -10.881895659710409, 33.23337361511982 -10.607516447038506, 33.55809637860425 -10.108655082055241 M32.876171464640635 -11.156274872382312 C33.028394155462024 -10.922419941764785, 33.18061684628341 -10.688565011147256, 33.55809637860425 -10.108655082055241 M33.55809637860425 -10.108655082055241 C33.686797323301384 -9.880133522361639, 33.81549826799853 -9.651611962668037, 34.171498974273504 -9.019496659696287 M33.55809637860425 -10.108655082055241 C33.687234203105724 -9.879357798030155, 33.81637202760721 -9.650060514005066, 34.171498974273504 -9.019496659696287 M34.171498974273504 -9.019496659696287 C34.329338559010395 -8.691739384764041, 34.487178143747286 -8.363982109831797, 34.71385864880834 -7.893275190886684 M34.171498974273504 -9.019496659696287 C34.312081351739955 -8.727574344906184, 34.452663729206414 -8.435652030116081, 34.71385864880834 -7.893275190886684 M34.71385864880834 -7.893275190886684 C34.8124409468044 -7.64977500887734, 34.91102324480047 -7.406274826867995, 35.182946729970325 -6.734618561215508 M34.71385864880834 -7.893275190886684 C34.84226513456992 -7.576108688485062, 34.97067162033151 -7.258942186083441, 35.182946729970325 -6.734618561215508 M35.182946729970325 -6.734618561215508 C35.2851292620304 -6.426861055226101, 35.38731179409047 -6.119103549236693, 35.57683563421488 -5.548287939305138 M35.182946729970325 -6.734618561215508 C35.33439580200131 -6.278478086390861, 35.4858448740323 -5.8223376115662155, 35.57683563421488 -5.548287939305138 M35.57683563421488 -5.548287939305138 C35.65357793277638 -5.255636294567554, 35.73032023133788 -4.962984649829972, 35.89390678754556 -4.339158212148133 M35.57683563421488 -5.548287939305138 C35.68324567429398 -5.142500338080449, 35.78965571437307 -4.736712736855759, 35.89390678754556 -4.339158212148133 M35.89390678754556 -4.339158212148133 C35.94869280045102 -4.057843614906506, 36.00347881335649 -3.7765290176648785, 36.132857276581774 -3.1121979531509023 M35.89390678754556 -4.339158212148133 C35.943444236163465 -4.084793883238681, 35.99298168478136 -3.8304295543292275, 36.132857276581774 -3.1121979531509023 M36.132857276581774 -3.1121979531509023 C36.19139338488452 -2.6582034564168184, 36.249929493187274 -2.2042089596827346, 36.29270520250937 -1.872449005199798 M36.132857276581774 -3.1121979531509023 C36.187582834579736 -2.6877573321024695, 36.2423083925777 -2.263316711054036, 36.29270520250937 -1.872449005199798 M36.29270520250937 -1.872449005199798 C36.31922208897173 -1.4594270945030474, 36.34573897543409 -1.0464051838062967, 36.37279371591342 -0.6250057626472757 M36.29270520250937 -1.872449005199798 C36.309367115425374 -1.612926262279006, 36.326029028341374 -1.353403519358214, 36.37279371591342 -0.6250057626472757 M36.37279371591342 -0.6250057626472757 C36.37279371591342 -0.1257591984233234, 36.37279371591342 0.3734873658006289, 36.37279371591342 0.625005762647271 M36.37279371591342 -0.6250057626472757 C36.37279371591342 -0.20382809301193927, 36.37279371591342 0.21734957662339716, 36.37279371591342 0.625005762647271 M36.37279371591342 0.625005762647271 C36.34328865402181 1.084570917666255, 36.313783592130214 1.5441360726852391, 36.29270520250937 1.8724490051997846 M36.37279371591342 0.625005762647271 C36.342110007378004 1.1029292905300396, 36.31142629884259 1.5808528184128083, 36.29270520250937 1.8724490051997846 M36.29270520250937 1.8724490051997846 C36.252006743602976 2.188098215657999, 36.211308284696585 2.503747426116214, 36.132857276581774 3.1121979531508885 M36.29270520250937 1.8724490051997846 C36.25234396982071 2.1854827557061567, 36.21198273713204 2.4985165062125287, 36.132857276581774 3.1121979531508885 M36.132857276581774 3.1121979531508885 C36.06972943065472 3.4363460999113724, 36.00660158472766 3.7604942466718563, 35.89390678754556 4.339158212148129 M36.132857276581774 3.1121979531508885 C36.084009246307126 3.3630222645763626, 36.03516121603248 3.613846576001836, 35.89390678754556 4.339158212148129 M35.89390678754556 4.339158212148129 C35.79247938556185 4.725944854826116, 35.691051983578134 5.112731497504103, 35.57683563421489 5.548287939305125 M35.89390678754556 4.339158212148129 C35.767204057504365 4.822330635105786, 35.64050132746316 5.305503058063443, 35.57683563421489 5.548287939305125 M35.57683563421489 5.548287939305125 C35.47265300427662 5.862069421431316, 35.36847037433836 6.175850903557505, 35.182946729970325 6.734618561215495 M35.57683563421489 5.548287939305125 C35.48824146861757 5.8151194505209, 35.399647303020245 6.081950961736675, 35.182946729970325 6.734618561215495 M35.182946729970325 6.734618561215495 C35.0358874550425 7.097857813484894, 34.888828180114665 7.461097065754293, 34.71385864880834 7.893275190886679 M35.182946729970325 6.734618561215495 C35.069018101367156 7.016024476525508, 34.955089472763994 7.29743039183552, 34.71385864880834 7.893275190886679 M34.71385864880834 7.893275190886679 C34.520299328864624 8.295205260255806, 34.3267400089209 8.697135329624931, 34.171498974273504 9.019496659696284 M34.71385864880834 7.893275190886679 C34.564862516765416 8.202668847080334, 34.41586638472249 8.51206250327399, 34.171498974273504 9.019496659696284 M34.171498974273504 9.019496659696284 C34.03528144416339 9.261364677927432, 33.89906391405327 9.50323269615858, 33.55809637860425 10.108655082055236 M34.171498974273504 9.019496659696284 C33.9620224678821 9.391443408590623, 33.75254596149069 9.763390157484965, 33.55809637860425 10.108655082055236 M33.55809637860425 10.108655082055236 C33.39516276981512 10.358964858955403, 33.232229161026 10.609274635855568, 32.87617146464064 11.156274872382301 M33.55809637860425 10.108655082055236 C33.35505002115974 10.420588812671275, 33.152003663715234 10.732522543287313, 32.87617146464064 11.156274872382301 M32.87617146464064 11.156274872382301 C32.582476231319106 11.549799728846974, 32.28878099799758 11.943324585311647, 32.12852640812658 12.158051136245302 M32.87617146464064 11.156274872382301 C32.607717552791286 11.515978657605947, 32.33926364094193 11.875682442829593, 32.12852640812658 12.158051136245302 M32.12852640812658 12.158051136245302 C31.88253887229817 12.447002092916662, 31.63655133646976 12.735953049588023, 31.31823344296866 13.10986736009567 M32.12852640812658 12.158051136245302 C31.909065526064325 12.41584237599358, 31.689604644002063 12.67363361574186, 31.31823344296866 13.10986736009567 M31.31823344296866 13.10986736009567 C31.048220434294315 13.388677960032222, 30.778207425619968 13.667488559968774, 30.44862223676799 14.007812326905684 M31.31823344296866 13.10986736009567 C31.084403167884986 13.351316316942176, 30.850572892801313 13.592765273788684, 30.44862223676799 14.007812326905684 M30.44862223676799 14.007812326905684 C30.212538034066498 14.222217753353473, 29.976453831365003 14.43662317980126, 29.523266208501887 14.848196188198111 M30.44862223676799 14.007812326905684 C30.159619389259536 14.270277066416538, 29.87061654175108 14.532741805927394, 29.523266208501887 14.848196188198111 M29.523266208501887 14.848196188198111 C29.31488162097404 15.014377351404805, 29.106497033446193 15.1805585146115, 28.545967844578715 15.627565626425152 M29.523266208501887 14.848196188198111 C29.31028737473701 15.018041140520811, 29.09730854097213 15.187886092843511, 28.545967844578715 15.627565626425152 M28.545967844578715 15.627565626425152 C28.305502310707574 15.795303973268473, 28.065036776836436 15.963042320111791, 27.520743073605708 16.34271804539089 M28.545967844578715 15.627565626425152 C28.327384839901907 15.780039668181928, 28.108801835225098 15.932513709938702, 27.520743073605708 16.34271804539089 M27.520743073605708 16.34271804539089 C27.285482836738286 16.485334183522532, 27.050222599870867 16.627950321654172, 26.451804764076787 16.990714730406093 M27.520743073605708 16.34271804539089 C27.1197566135464 16.585798393936845, 26.71877015348709 16.8288787424828, 26.451804764076787 16.990714730406093 M26.451804764076787 16.990714730406093 C26.059068628288852 17.195604920887156, 25.666332492500917 17.400495111368222, 25.343545412792388 17.56889292409717 M26.451804764076787 16.990714730406093 C26.102206021895224 17.173100170273532, 25.75260727971366 17.35548561014097, 25.343545412792388 17.56889292409717 M25.343545412792388 17.56889292409717 C25.070988855924856 17.68954562671943, 24.79843229905733 17.81019832934169, 24.200519095147804 18.07487676824742 M25.343545412792388 17.56889292409717 C25.09636492916318 17.678312391851293, 24.849184445533968 17.787731859605415, 24.200519095147804 18.07487676824742 M24.200519095147804 18.07487676824742 C23.754995226112456 18.238833670429926, 23.30947135707711 18.40279057261243, 23.027422751460616 18.506587066708033 M24.200519095147804 18.07487676824742 C23.850989220104946 18.203506993281938, 23.501459345062084 18.332137218316458, 23.027422751460616 18.506587066708033 M23.027422751460616 18.506587066708033 C22.59665005342332 18.63443814231347, 22.165877355386023 18.762289217918905, 21.829076886235413 18.86224982926107 M23.027422751460616 18.506587066708033 C22.61776256678593 18.62817205916929, 22.208102382111242 18.74975705163055, 21.829076886235413 18.86224982926107 M21.829076886235413 18.86224982926107 C21.457148667577478 18.947140018111295, 21.085220448919546 19.032030206961522, 20.610405759676766 19.140403561325773 M21.829076886235413 18.86224982926107 C21.491641585913033 18.939267234588534, 21.154206285590654 19.016284639915998, 20.610405759676766 19.140403561325773 M20.610405759676766 19.140403561325773 C20.171171820968738 19.21141549822602, 19.731937882260706 19.282427435126266, 19.37641715284788 19.3399052695533 M20.610405759676766 19.140403561325773 C20.16131203430173 19.213009552070552, 19.712218308926694 19.285615542815332, 19.37641715284788 19.3399052695533 M19.37641715284788 19.3399052695533 C18.93651234340998 19.382342357456835, 18.49660753397208 19.42477944536037, 18.1321817896239 19.45993515863156 M19.37641715284788 19.3399052695533 C18.897313413100655 19.386123831120166, 18.41820967335343 19.43234239268703, 18.1321817896239 19.45993515863156 M18.1321817896239 19.45993515863156 C17.65375891374598 19.47527724906733, 17.175336037868053 19.490619339503098, 16.882812500000004 19.5 M18.1321817896239 19.45993515863156 C17.63716405804813 19.47580941378963, 17.142146326472353 19.491683668947704, 16.882812500000004 19.5 M16.882812500000004 19.5 C16.882812500000004 19.5, 16.882812500000004 19.5, 16.8828125 19.5 M16.882812500000004 19.5 C16.882812500000004 19.5, 16.8828125 19.5, 16.8828125 19.5 M16.8828125 19.5 C6.1059619320605325 19.5, -4.670888635878935 19.5, -16.882812499999996 19.5 M16.8828125 19.5 C9.368301823042602 19.5, 1.8537911460852037 19.5, -16.882812499999996 19.5 M-16.882812499999996 19.5 C-17.26897106430513 19.487616646454782, -17.655129628610265 19.475233292909564, -18.132181789623893 19.45993515863156 M-16.882812499999996 19.5 C-17.24578308722369 19.488360239747124, -17.608753674447378 19.47672047949425, -18.132181789623893 19.45993515863156 M-18.132181789623893 19.45993515863156 C-18.449973088779753 19.429278214201947, -18.767764387935614 19.398621269772338, -19.37641715284787 19.3399052695533 M-18.132181789623893 19.45993515863156 C-18.456614933573352 19.428637483422698, -18.78104807752281 19.397339808213836, -19.37641715284787 19.3399052695533 M-19.37641715284787 19.3399052695533 C-19.77600646509718 19.275302768410228, -20.175595777346487 19.210700267267157, -20.61040575967676 19.140403561325773 M-19.37641715284787 19.3399052695533 C-19.6972988337348 19.2880276078621, -20.01818051462173 19.2361499461709, -20.61040575967676 19.140403561325773 M-20.61040575967676 19.140403561325773 C-21.012668179303045 19.048589789053683, -21.414930598929327 18.95677601678159, -21.829076886235388 18.862249829261074 M-20.61040575967676 19.140403561325773 C-20.900149588478754 19.0742714231569, -21.189893417280746 19.00813928498803, -21.829076886235388 18.862249829261074 M-21.829076886235388 18.862249829261074 C-22.236156412854193 18.741430762564654, -22.643235939472998 18.62061169586823, -23.02742275146059 18.506587066708043 M-21.829076886235388 18.862249829261074 C-22.165370770807353 18.762439569562737, -22.501664655379322 18.6626293098644, -23.02742275146059 18.506587066708043 M-23.02742275146059 18.506587066708043 C-23.28617105911196 18.411365297649205, -23.544919366763327 18.316143528590363, -24.200519095147797 18.074876768247425 M-23.02742275146059 18.506587066708043 C-23.38590521045028 18.374662208024315, -23.744387669439963 18.242737349340583, -24.200519095147797 18.074876768247425 M-24.200519095147797 18.074876768247425 C-24.45191072890017 17.963593149253107, -24.703302362652547 17.85230953025879, -25.34354541279238 17.568892924097174 M-24.200519095147797 18.074876768247425 C-24.544932379450692 17.922415223943613, -24.889345663753588 17.7699536796398, -25.34354541279238 17.568892924097174 M-25.34354541279238 17.568892924097174 C-25.74467647373354 17.359623106540877, -26.145807534674702 17.15035328898458, -26.45180476407678 16.990714730406097 M-25.34354541279238 17.568892924097174 C-25.669351863424133 17.398919907491578, -25.995158314055885 17.228946890885986, -26.45180476407678 16.990714730406097 M-26.45180476407678 16.990714730406097 C-26.73842443062496 16.816964204180465, -27.025044097173144 16.643213677954837, -27.520743073605686 16.3427180453909 M-26.45180476407678 16.990714730406097 C-26.811393669257885 16.772729822906346, -27.17098257443899 16.55474491540659, -27.520743073605686 16.3427180453909 M-27.520743073605686 16.3427180453909 C-27.746335576498304 16.185354481115066, -27.971928079390917 16.027990916839233, -28.545967844578712 15.627565626425156 M-27.520743073605686 16.3427180453909 C-27.903925195801214 16.075426784634026, -28.287107317996742 15.80813552387715, -28.545967844578712 15.627565626425156 M-28.545967844578712 15.627565626425156 C-28.867898511149747 15.370834486769581, -29.18982917772078 15.114103347114005, -29.52326620850187 14.848196188198125 M-28.545967844578712 15.627565626425156 C-28.78827342647812 15.434333372882712, -29.030579008377526 15.241101119340268, -29.52326620850187 14.848196188198125 M-29.52326620850187 14.848196188198125 C-29.808357639191176 14.589283693952002, -30.093449069880485 14.33037119970588, -30.448622236767974 14.007812326905697 M-29.52326620850187 14.848196188198125 C-29.821623776493997 14.57723573905634, -30.119981344486124 14.306275289914556, -30.448622236767974 14.007812326905697 M-30.448622236767974 14.007812326905697 C-30.647737682678507 13.80220928132094, -30.84685312858904 13.59660623573618, -31.318233442968655 13.109867360095677 M-30.448622236767974 14.007812326905697 C-30.73378242511036 13.713361020355318, -31.01894261345274 13.41890971380494, -31.318233442968655 13.109867360095677 M-31.318233442968655 13.109867360095677 C-31.53770728508701 12.852060896728059, -31.757181127205364 12.59425443336044, -32.128526408126575 12.158051136245307 M-31.318233442968655 13.109867360095677 C-31.480985587397438 12.91868943039026, -31.64373773182622 12.727511500684844, -32.128526408126575 12.158051136245307 M-32.128526408126575 12.158051136245307 C-32.35363339398767 11.856428282859737, -32.57874037984876 11.554805429474168, -32.876171464640635 11.156274872382316 M-32.128526408126575 12.158051136245307 C-32.424534348284254 11.76142746331213, -32.72054228844193 11.364803790378954, -32.876171464640635 11.156274872382316 M-32.876171464640635 11.156274872382316 C-33.124945739386504 10.774090781126276, -33.373720014132374 10.391906689870238, -33.55809637860425 10.108655082055249 M-32.876171464640635 11.156274872382316 C-33.06163333920131 10.871355629570653, -33.24709521376199 10.586436386758992, -33.55809637860425 10.108655082055249 M-33.55809637860425 10.108655082055249 C-33.717725516576785 9.825217383382002, -33.87735465454932 9.541779684708757, -34.171498974273504 9.019496659696289 M-33.55809637860425 10.108655082055249 C-33.70723277286981 9.843848312339253, -33.85636916713537 9.579041542623257, -34.171498974273504 9.019496659696289 M-34.171498974273504 9.019496659696289 C-34.35268529349636 8.643259391063854, -34.5338716127192 8.267022122431419, -34.71385864880834 7.893275190886686 M-34.171498974273504 9.019496659696289 C-34.34737330790226 8.654289842808275, -34.523247641531015 8.289083025920261, -34.71385864880834 7.893275190886686 M-34.71385864880834 7.893275190886686 C-34.89795083966145 7.438563920299125, -35.08204303051456 6.983852649711564, -35.182946729970325 6.73461856121551 M-34.71385864880834 7.893275190886686 C-34.83542010684396 7.593016039307793, -34.956981564879584 7.292756887728899, -35.182946729970325 6.73461856121551 M-35.182946729970325 6.73461856121551 C-35.30224297046875 6.375317292108954, -35.42153921096716 6.016016023002398, -35.57683563421488 5.5482879393051325 M-35.182946729970325 6.73461856121551 C-35.2721970519142 6.465810811628233, -35.36144737385807 6.197003062040956, -35.57683563421488 5.5482879393051325 M-35.57683563421488 5.5482879393051325 C-35.64478368441596 5.289172575017156, -35.71273173461705 5.03005721072918, -35.89390678754556 4.339158212148136 M-35.57683563421488 5.5482879393051325 C-35.696216967821925 5.093035174064205, -35.81559830142896 4.637782408823278, -35.89390678754556 4.339158212148136 M-35.89390678754556 4.339158212148136 C-35.9491721275123 4.055382371752655, -36.00443746747904 3.771606531357174, -36.132857276581774 3.112197953150904 M-35.89390678754556 4.339158212148136 C-35.98832130137381 3.854359638154643, -36.08273581520206 3.36956106416115, -36.132857276581774 3.112197953150904 M-36.132857276581774 3.112197953150904 C-36.18782922164332 2.6858464026919773, -36.24280116670486 2.25949485223305, -36.29270520250937 1.872449005199809 M-36.132857276581774 3.112197953150904 C-36.195525314035336 2.626157029864813, -36.2581933514889 2.1401161065787213, -36.29270520250937 1.872449005199809 M-36.29270520250937 1.872449005199809 C-36.31466964333672 1.5303351099362628, -36.336634084164075 1.1882212146727162, -36.37279371591342 0.6250057626472781 M-36.29270520250937 1.872449005199809 C-36.31201833353047 1.5716314002674387, -36.33133146455156 1.2708137953350684, -36.37279371591342 0.6250057626472781 M-36.37279371591342 0.6250057626472781 C-36.37279371591342 0.2121731332595509, -36.37279371591342 -0.20065949612817635, -36.37279371591342 -0.6250057626472687 M-36.37279371591342 0.6250057626472781 C-36.37279371591342 0.3619748470719388, -36.37279371591342 0.09894393149659941, -36.37279371591342 -0.6250057626472687 M-36.37279371591342 -0.6250057626472687 C-36.34291468386592 -1.090395804707535, -36.31303565181843 -1.5557858467678014, -36.29270520250937 -1.8724490051997822 M-36.37279371591342 -0.6250057626472687 C-36.35269762281912 -0.9380186338652725, -36.332601529724826 -1.2510315050832763, -36.29270520250937 -1.8724490051997822 M-36.29270520250937 -1.8724490051997822 C-36.25103068681378 -2.1956683193708058, -36.209356171118195 -2.5188876335418295, -36.132857276581774 -3.112197953150895 M-36.29270520250937 -1.8724490051997822 C-36.237377025011156 -2.301563424091452, -36.182048847512945 -2.730677842983122, -36.132857276581774 -3.112197953150895 M-36.132857276581774 -3.112197953150895 C-36.0640156677414 -3.4656850648670465, -35.99517405890102 -3.819172176583198, -35.89390678754556 -4.339158212148126 M-36.132857276581774 -3.112197953150895 C-36.04116971586529 -3.5829941992572403, -35.9494821551488 -4.053790445363585, -35.89390678754556 -4.339158212148126 M-35.89390678754556 -4.339158212148126 C-35.7744870835265 -4.794557300399932, -35.655067379507436 -5.249956388651737, -35.57683563421489 -5.548287939305123 M-35.89390678754556 -4.339158212148126 C-35.79166611294316 -4.729046215795743, -35.68942543834077 -5.118934219443361, -35.57683563421489 -5.548287939305123 M-35.57683563421489 -5.548287939305123 C-35.489422039514274 -5.811563759078441, -35.40200844481366 -6.0748395788517575, -35.18294672997033 -6.734618561215485 M-35.57683563421489 -5.548287939305123 C-35.443347662270156 -5.950332442382622, -35.30985969032543 -6.35237694546012, -35.18294672997033 -6.734618561215485 M-35.18294672997033 -6.734618561215485 C-35.07824239583235 -6.993240290856894, -34.97353806169436 -7.2518620204983035, -34.71385864880834 -7.893275190886676 M-35.18294672997033 -6.734618561215485 C-34.99934633764295 -7.188115079936229, -34.81574594531556 -7.641611598656973, -34.71385864880834 -7.893275190886676 M-34.71385864880834 -7.893275190886676 C-34.52085927848126 -8.294042512895846, -34.32785990815418 -8.694809834905016, -34.171498974273504 -9.019496659696282 M-34.71385864880834 -7.893275190886676 C-34.56158145701443 -8.209482037856693, -34.40930426522051 -8.52568888482671, -34.171498974273504 -9.019496659696282 M-34.171498974273504 -9.019496659696282 C-33.99061095139796 -9.340681661210334, -33.809722928522426 -9.661866662724389, -33.55809637860425 -10.108655082055243 M-34.171498974273504 -9.019496659696282 C-33.95560727086736 -9.402834240499434, -33.73971556746121 -9.786171821302586, -33.55809637860425 -10.108655082055243 M-33.55809637860425 -10.108655082055243 C-33.38099344822262 -10.380732741917088, -33.203890517840996 -10.652810401778934, -32.87617146464064 -11.156274872382308 M-33.55809637860425 -10.108655082055243 C-33.39777320283145 -10.354954532842916, -33.23745002705865 -10.60125398363059, -32.87617146464064 -11.156274872382308 M-32.87617146464064 -11.156274872382308 C-32.69750154692294 -11.395676284959672, -32.51883162920524 -11.635077697537035, -32.12852640812659 -12.158051136245302 M-32.87617146464064 -11.156274872382308 C-32.69372918978885 -11.400730899850554, -32.51128691493705 -11.6451869273188, -32.12852640812659 -12.158051136245302 M-32.12852640812659 -12.158051136245302 C-31.823345431543444 -12.516534076629366, -31.5181644549603 -12.87501701701343, -31.318233442968662 -13.10986736009567 M-32.12852640812659 -12.158051136245302 C-31.81779333411647 -12.523055886190386, -31.507060260106346 -12.88806063613547, -31.318233442968662 -13.10986736009567 M-31.318233442968662 -13.10986736009567 C-31.012309057032994 -13.425759405433443, -30.706384671097325 -13.741651450771213, -30.448622236767996 -14.007812326905677 M-31.318233442968662 -13.10986736009567 C-31.085699265444212 -13.34997798980069, -30.853165087919763 -13.59008861950571, -30.448622236767996 -14.007812326905677 M-30.448622236767996 -14.007812326905677 C-30.23791102846703 -14.19917467117155, -30.027199820166064 -14.390537015437422, -29.523266208501887 -14.848196188198107 M-30.448622236767996 -14.007812326905677 C-30.257427093387754 -14.181450697377329, -30.066231950007513 -14.355089067848981, -29.523266208501887 -14.848196188198107 M-29.523266208501887 -14.848196188198107 C-29.163710239468063 -15.134932505316408, -28.804154270434243 -15.421668822434707, -28.54596784457872 -15.627565626425149 M-29.523266208501887 -14.848196188198107 C-29.185308739872667 -15.117708276003972, -28.847351271243447 -15.387220363809837, -28.54596784457872 -15.627565626425149 M-28.54596784457872 -15.627565626425149 C-28.140913182219755 -15.910114224353034, -27.735858519860795 -16.19266282228092, -27.52074307360571 -16.342718045390885 M-28.54596784457872 -15.627565626425149 C-28.189703592647312 -15.876080146141598, -27.833439340715906 -16.124594665858048, -27.52074307360571 -16.342718045390885 M-27.52074307360571 -16.342718045390885 C-27.167822640495995 -16.55666048593267, -26.81490220738628 -16.770602926474453, -26.45180476407679 -16.99071473040609 M-27.52074307360571 -16.342718045390885 C-27.220807423591925 -16.52454079904677, -26.92087177357814 -16.706363552702655, -26.45180476407679 -16.99071473040609 M-26.45180476407679 -16.99071473040609 C-26.029376677729317 -17.211095192475465, -25.60694859138184 -17.43147565454484, -25.343545412792388 -17.56889292409717 M-26.45180476407679 -16.99071473040609 C-26.227124152069294 -17.107930461775602, -26.002443540061797 -17.22514619314511, -25.343545412792388 -17.56889292409717 M-25.343545412792388 -17.56889292409717 C-25.09393430151034 -17.679388358611195, -24.844323190228298 -17.789883793125224, -24.200519095147804 -18.07487676824742 M-25.343545412792388 -17.56889292409717 C-24.919385028577004 -17.756656143918573, -24.49522464436162 -17.94441936373997, -24.200519095147804 -18.07487676824742 M-24.200519095147804 -18.07487676824742 C-23.94193917567423 -18.17003656890027, -23.68335925620065 -18.26519636955312, -23.02742275146062 -18.506587066708033 M-24.200519095147804 -18.07487676824742 C-23.8268312234176 -18.212397359376954, -23.453143351687395 -18.34991795050649, -23.02742275146062 -18.506587066708033 M-23.02742275146062 -18.506587066708033 C-22.60408574318266 -18.632231268623627, -22.180748734904707 -18.757875470539226, -21.829076886235413 -18.862249829261067 M-23.02742275146062 -18.506587066708033 C-22.782032194149174 -18.57941769603675, -22.53664163683773 -18.652248325365466, -21.829076886235413 -18.862249829261067 M-21.829076886235413 -18.862249829261067 C-21.433383950077346 -18.952564159801426, -21.03769101391928 -19.04287849034178, -20.610405759676766 -19.140403561325773 M-21.829076886235413 -18.862249829261067 C-21.553278956050082 -18.92519890707618, -21.277481025864756 -18.98814798489129, -20.610405759676766 -19.140403561325773 M-20.610405759676766 -19.140403561325773 C-20.24943685753605 -19.19876221406824, -19.88846795539534 -19.257120866810705, -19.376417152847882 -19.3399052695533 M-20.610405759676766 -19.140403561325773 C-20.24838200682529 -19.198932754150665, -19.886358253973818 -19.257461946975557, -19.376417152847882 -19.3399052695533 M-19.376417152847882 -19.3399052695533 C-18.890314577624366 -19.386799000361233, -18.40421200240085 -19.433692731169163, -18.132181789623903 -19.45993515863156 M-19.376417152847882 -19.3399052695533 C-19.029607851932713 -19.373361545713376, -18.682798551017544 -19.406817821873457, -18.132181789623903 -19.45993515863156 M-18.132181789623903 -19.45993515863156 C-17.699899081195902 -19.473797623703597, -17.2676163727679 -19.487660088775634, -16.882812500000007 -19.5 M-18.132181789623903 -19.45993515863156 C-17.647954821157423 -19.47546337501966, -17.16372785269094 -19.490991591407766, -16.882812500000007 -19.5 M-16.882812500000007 -19.5 C-16.882812500000004 -19.5, -16.8828125 -19.5, -16.8828125 -19.5 M-16.882812500000007 -19.5 C-16.882812500000004 -19.5, -16.882812500000004 -19.5, -16.8828125 -19.5"
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
            id="inference_diagram-flowchart-stop-1"
            data-look="classic"
            transform="translate(346.46875, 1493.90625)"
          >
            <g className="basic label-container outer-path">
              <path
                d="M-12.078125 -19.5 C-5.90056622679206 -19.5, 0.27699254641587956 -19.5, 12.078125 -19.5 C12.078125 -19.5, 12.078124999999998 -19.5, 12.078124999999998 -19.5 C12.5079987289946 -19.486214786209597, 12.9378724579892 -19.472429572419195, 13.3274942896239 -19.45993515863156 C13.599765600795338 -19.43366947269701, 13.872036911966777 -19.407403786762462, 14.571729652847864 -19.3399052695533 C14.905993231968754 -19.285864126333806, 15.240256811089644 -19.231822983114313, 15.805718259676757 -19.140403561325776 C16.23397128382395 -19.04265760317633, 16.662224307971147 -18.944911645026885, 17.02438938623539 -18.862249829261074 C17.33939763147439 -18.768757035586162, 17.65440587671339 -18.675264241911247, 18.222735251460602 -18.50658706670804 C18.604213087690226 -18.366199696633075, 18.985690923919847 -18.225812326558113, 19.395831595147794 -18.074876768247425 C19.743742390822792 -17.920866979409173, 20.09165318649779 -17.76685719057092, 20.53885791279238 -17.568892924097174 C20.89766691283087 -17.381702498605225, 21.256475912869362 -17.19451207311328, 21.647117264076783 -16.990714730406097 C21.930809568061566 -16.81873878856949, 22.214501872046345 -16.646762846732887, 22.716055573605697 -16.342718045390892 C22.927241329364865 -16.19540400425732, 23.138427085124036 -16.048089963123747, 23.741280344578712 -15.627565626425154 C24.012033637452173 -15.411647080406283, 24.28278693032564 -15.195728534387412, 24.71857870850187 -14.848196188198123 C25.049156574513034 -14.54797411689782, 25.3797344405242 -14.247752045597515, 25.643934736767985 -14.007812326905688 C25.92755084327543 -13.714955411621359, 26.21116694978287 -13.422098496337032, 26.513545942968648 -13.10986736009568 C26.74062575591507 -12.843126490601419, 26.967705568861486 -12.576385621107157, 27.323838908126582 -12.158051136245305 C27.560430310975214 -11.841040210348345, 27.797021713823842 -11.524029284451384, 28.071483964640635 -11.156274872382312 C28.22373466128957 -10.922376917293054, 28.375985357938504 -10.688478962203797, 28.753408878604247 -10.108655082055241 C28.98658811130732 -9.69462174243323, 29.219767344010396 -9.280588402811217, 29.3668114742735 -9.019496659696287 C29.51623719168386 -8.709210960295506, 29.66566290909422 -8.398925260894723, 29.90917114880834 -7.893275190886684 C30.06433025570262 -7.510029197060554, 30.219489362596903 -7.126783203234423, 30.378259229970325 -6.734618561215508 C30.50750103201969 -6.345362845327549, 30.63674283406905 -5.95610712943959, 30.77214813421488 -5.548287939305138 C30.897789680545706 -5.069162269755069, 31.023431226876532 -4.590036600205001, 31.08921928754556 -4.339158212148133 C31.17114051958624 -3.9185099996777746, 31.253061751626916 -3.4978617872074156, 31.328169776581777 -3.1121979531509023 C31.380462694851133 -2.706624405458483, 31.43275561312049 -2.3010508577660636, 31.488017702509367 -1.872449005199798 C31.507243427782036 -1.5729928153518262, 31.52646915305471 -1.2735366255038545, 31.568106215913414 -0.6250057626472757 C31.568106215913414 -0.17306312303373078, 31.568106215913414 0.27887951657981414, 31.568106215913414 0.625005762647271 C31.54322694092287 1.0125205528143235, 31.518347665932325 1.4000353429813759, 31.488017702509367 1.8724490051997846 C31.444890220756754 2.2069372371885105, 31.401762739004138 2.541425469177236, 31.328169776581777 3.1121979531508885 C31.26475504753184 3.437819184114597, 31.2013403184819 3.763440415078306, 31.08921928754556 4.339158212148129 C30.978977711678382 4.759557119930889, 30.868736135811208 5.179956027713651, 30.772148134214884 5.548287939305125 C30.688707011211477 5.799599307253875, 30.605265888208066 6.050910675202625, 30.37825922997033 6.734618561215495 C30.273487579919212 6.993406562463809, 30.168715929868092 7.2521945637121235, 29.909171148808344 7.893275190886679 C29.72045664543972 8.285144894975149, 29.531742142071096 8.677014599063618, 29.366811474273504 9.019496659696284 C29.12996158529809 9.440047621224087, 28.893111696322677 9.860598582751892, 28.75340887860425 10.108655082055236 C28.506574361225464 10.487859185097653, 28.259739843846678 10.867063288140068, 28.07148396464064 11.156274872382301 C27.888207370576083 11.401848811587605, 27.704930776511524 11.64742275079291, 27.323838908126582 12.158051136245302 C27.081815260292064 12.442345884527418, 26.83979161245755 12.726640632809534, 26.51354594296866 13.10986736009567 C26.230204260417068 13.402440910114954, 25.946862577865478 13.695014460134239, 25.64393473676799 14.007812326905684 C25.31503021084536 14.306514715011735, 24.98612568492273 14.605217103117784, 24.718578708501887 14.848196188198111 C24.379524130810605 15.118583191285671, 24.04046955311932 15.388970194373233, 23.741280344578715 15.627565626425152 C23.51523310537236 15.785246395068233, 23.289185866166008 15.942927163711316, 22.716055573605708 16.34271804539089 C22.48930219261032 16.48017727750107, 22.262548811614934 16.61763650961125, 21.647117264076787 16.990714730406093 C21.228407821281518 17.209155178516188, 20.80969837848625 17.42759562662628, 20.538857912792388 17.56889292409717 C20.109358745255136 17.75901946492578, 19.67985957771788 17.949146005754397, 19.395831595147804 18.07487676824742 C19.00892448403604 18.217262161666678, 18.622017372924272 18.359647555085935, 18.222735251460616 18.506587066708033 C17.798299200411037 18.632557458749254, 17.373863149361455 18.758527850790475, 17.024389386235413 18.86224982926107 C16.616666390173023 18.95530994247111, 16.208943394110634 19.04837005568115, 15.805718259676766 19.140403561325773 C15.35353417434981 19.21350917750148, 14.901350089022857 19.286614793677188, 14.571729652847878 19.3399052695533 C14.315050093794135 19.36466683791288, 14.058370534740392 19.389428406272458, 13.3274942896239 19.45993515863156 C13.039553902749168 19.46916884639667, 12.751613515874434 19.478402534161777, 12.078125000000004 19.5 C12.078125000000002 19.5, 12.078125000000002 19.5, 12.078125 19.5 C4.160614577506167 19.5, -3.7568958449876657 19.5, -12.078124999999996 19.5 C-12.335445659070658 19.491748227307884, -12.592766318141319 19.483496454615764, -13.327494289623893 19.45993515863156 C-13.753469600812563 19.418841832671454, -14.179444912001234 19.37774850671135, -14.571729652847871 19.3399052695533 C-15.03551716461384 19.264923701376848, -15.499304676379806 19.189942133200397, -15.805718259676759 19.140403561325773 C-16.101056920196875 19.07299443932693, -16.396395580716987 19.005585317328084, -17.024389386235388 18.862249829261074 C-17.33721648430885 18.76940438861582, -17.650043582382313 18.67655894797056, -18.22273525146059 18.506587066708043 C-18.626090080532908 18.358148761038265, -19.029444909605225 18.209710455368484, -19.395831595147797 18.074876768247425 C-19.720222459350833 17.931278555377833, -20.044613323553865 17.78768034250824, -20.53885791279238 17.568892924097174 C-20.838053234559467 17.412802916375036, -21.137248556326554 17.256712908652897, -21.64711726407678 16.990714730406097 C-22.020439292616327 16.764404722821666, -22.39376132115587 16.538094715237236, -22.716055573605686 16.3427180453909 C-22.95841026976431 16.17366190071635, -23.200764965922936 16.004605756041798, -23.741280344578712 15.627565626425156 C-24.064460943467378 15.369837699008366, -24.387641542356043 15.112109771591577, -24.71857870850187 14.848196188198125 C-25.043575154216732 14.553043015134632, -25.368571599931595 14.25788984207114, -25.643934736767974 14.007812326905697 C-25.8698751674193 13.774510282203867, -26.095815598070622 13.541208237502035, -26.513545942968655 13.109867360095677 C-26.83441425667968 12.732957180886434, -27.155282570390703 12.35604700167719, -27.32383890812658 12.158051136245307 C-27.48687815491448 11.939593398730462, -27.64991740170238 11.721135661215618, -28.071483964640635 11.156274872382316 C-28.264113818941397 10.860343687817814, -28.456743673242155 10.564412503253314, -28.753408878604244 10.108655082055249 C-28.904968585424694 9.839545475511041, -29.056528292245147 9.570435868966836, -29.3668114742735 9.019496659696289 C-29.476840853609318 8.791018299253894, -29.58687023294513 8.562539938811497, -29.90917114880834 7.893275190886686 C-30.03553161770998 7.581162389686161, -30.161892086611626 7.269049588485634, -30.378259229970325 6.73461856121551 C-30.490916811285146 6.395311875843251, -30.603574392599967 6.056005190470993, -30.77214813421488 5.5482879393051325 C-30.885457619612737 5.116189762841487, -30.998767105010593 4.684091586377842, -31.089219287545557 4.339158212148136 C-31.166883395460506 3.9403694323199066, -31.24454750337545 3.5415806524916773, -31.328169776581777 3.112197953150904 C-31.380402156544196 2.7070939286124496, -31.432634536506615 2.301989904073995, -31.488017702509364 1.872449005199809 C-31.514437509288335 1.460939188933157, -31.540857316067303 1.0494293726665052, -31.568106215913414 0.6250057626472781 C-31.568106215913414 0.17594747554799706, -31.568106215913414 -0.273110811551284, -31.568106215913414 -0.6250057626472687 C-31.54779254236798 -0.9414076250195851, -31.527478868822545 -1.2578094873919015, -31.488017702509367 -1.8724490051997822 C-31.445310734479673 -2.203675815793358, -31.40260376644998 -2.534902626386933, -31.328169776581777 -3.112197953150895 C-31.271393385243616 -3.4037327229777983, -31.214616993905455 -3.6952674928047013, -31.08921928754556 -4.339158212148126 C-30.99589622895822 -4.695039481011097, -30.902573170370882 -5.050920749874068, -30.772148134214884 -5.548287939305123 C-30.642674751110658 -5.938241140432899, -30.51320136800643 -6.328194341560675, -30.378259229970332 -6.734618561215485 C-30.24228549800838 -7.07047630803478, -30.106311766046424 -7.406334054854075, -29.909171148808344 -7.893275190886676 C-29.713736522013207 -8.299099375057912, -29.518301895218066 -8.704923559229146, -29.366811474273504 -9.019496659696282 C-29.146810393227724 -9.41013085661821, -28.92680931218195 -9.800765053540136, -28.753408878604247 -10.108655082055243 C-28.49117746773777 -10.511512948139561, -28.22894605687129 -10.914370814223878, -28.07148396464064 -11.156274872382308 C-27.782980974753407 -11.54284259566813, -27.494477984866172 -11.92941031895395, -27.323838908126586 -12.158051136245302 C-27.148458796298357 -12.364062595009807, -26.973078684470128 -12.570074053774311, -26.513545942968662 -13.10986736009567 C-26.335766094851756 -13.293439649273353, -26.15798624673485 -13.477011938451035, -25.643934736767996 -14.007812326905677 C-25.454134998016904 -14.180183427813517, -25.264335259265813 -14.35255452872136, -24.718578708501887 -14.848196188198107 C-24.516551057092833 -15.009307864015241, -24.314523405683776 -15.170419539832373, -23.74128034457872 -15.627565626425149 C-23.514536772112137 -15.785732127006783, -23.287793199645556 -15.943898627588418, -22.71605557360571 -16.342718045390885 C-22.400255639593876 -16.53415782123527, -22.08445570558204 -16.725597597079652, -21.64711726407679 -16.99071473040609 C-21.281244622425728 -17.181590253202838, -20.915371980774662 -17.372465775999586, -20.538857912792388 -17.56889292409717 C-20.216336581415494 -17.711663550242353, -19.8938152500386 -17.85443417638753, -19.395831595147804 -18.07487676824742 C-18.941997490663148 -18.241891913894246, -18.488163386178492 -18.408907059541075, -18.22273525146062 -18.506587066708033 C-17.90889162201474 -18.59973420852874, -17.595047992568855 -18.692881350349452, -17.024389386235413 -18.862249829261067 C-16.65399408620908 -18.94679013943686, -16.28359878618275 -19.031330449612653, -15.805718259676768 -19.140403561325773 C-15.503951316077783 -19.18919090052926, -15.2021843724788 -19.237978239732744, -14.57172965284788 -19.3399052695533 C-14.095760377070018 -19.385821453150786, -13.619791101292154 -19.43173763674827, -13.327494289623903 -19.45993515863156 C-12.929988222953831 -19.472682404491046, -12.53248215628376 -19.485429650350536, -12.078125000000005 -19.5 C-12.078125000000004 -19.5, -12.078125000000002 -19.5, -12.078125 -19.5"
                stroke="none"
                strokeWidth={0}
                fill="#b8ddf9"
                style={{}}
              />
              <path
                d="M-12.078125 -19.5 C-6.3822750343668595 -19.5, -0.686425068733719 -19.5, 12.078125 -19.5 M-12.078125 -19.5 C-4.511220017748053 -19.5, 3.055684964503895 -19.5, 12.078125 -19.5 M12.078125 -19.5 C12.078125 -19.5, 12.078125 -19.5, 12.078124999999998 -19.5 M12.078125 -19.5 C12.078125 -19.5, 12.078124999999998 -19.5, 12.078124999999998 -19.5 M12.078124999999998 -19.5 C12.49909183560516 -19.48650041294438, 12.920058671210322 -19.47300082588876, 13.3274942896239 -19.45993515863156 M12.078124999999998 -19.5 C12.342495697996895 -19.491522146281586, 12.60686639599379 -19.48304429256317, 13.3274942896239 -19.45993515863156 M13.3274942896239 -19.45993515863156 C13.648701295551264 -19.42894870507769, 13.969908301478629 -19.39796225152382, 14.571729652847864 -19.3399052695533 M13.3274942896239 -19.45993515863156 C13.590533833504637 -19.434560050184718, 13.853573377385372 -19.40918494173788, 14.571729652847864 -19.3399052695533 M14.571729652847864 -19.3399052695533 C15.054450324862351 -19.26186273485672, 15.537170996876839 -19.183820200160138, 15.805718259676757 -19.140403561325776 M14.571729652847864 -19.3399052695533 C14.91034649350537 -19.28516032476861, 15.248963334162877 -19.230415379983928, 15.805718259676757 -19.140403561325776 M15.805718259676757 -19.140403561325776 C16.206491467053375 -19.048929692031653, 16.60726467442999 -18.95745582273753, 17.02438938623539 -18.862249829261074 M15.805718259676757 -19.140403561325776 C16.215864402370023 -19.046790380709748, 16.62601054506329 -18.953177200093716, 17.02438938623539 -18.862249829261074 M17.02438938623539 -18.862249829261074 C17.446711827605014 -18.7369067454783, 17.86903426897464 -18.61156366169553, 18.222735251460602 -18.50658706670804 M17.02438938623539 -18.862249829261074 C17.404536674665568 -18.749424109488835, 17.784683963095745 -18.636598389716596, 18.222735251460602 -18.50658706670804 M18.222735251460602 -18.50658706670804 C18.533109152110637 -18.39236660220394, 18.843483052760675 -18.27814613769984, 19.395831595147794 -18.074876768247425 M18.222735251460602 -18.50658706670804 C18.54866639681184 -18.386641392344302, 18.87459754216308 -18.266695717980568, 19.395831595147794 -18.074876768247425 M19.395831595147794 -18.074876768247425 C19.79187782466419 -17.899558850734497, 20.187924054180588 -17.72424093322157, 20.53885791279238 -17.568892924097174 M19.395831595147794 -18.074876768247425 C19.647406423788684 -17.963512054310243, 19.89898125242958 -17.85214734037306, 20.53885791279238 -17.568892924097174 M20.53885791279238 -17.568892924097174 C20.90812047527274 -17.376248881775133, 21.277383037753093 -17.18360483945309, 21.647117264076783 -16.990714730406097 M20.53885791279238 -17.568892924097174 C20.956873534549768 -17.35081444197813, 21.37488915630716 -17.132735959859087, 21.647117264076783 -16.990714730406097 M21.647117264076783 -16.990714730406097 C22.062364753968087 -16.73898926176887, 22.477612243859394 -16.487263793131646, 22.716055573605697 -16.342718045390892 M21.647117264076783 -16.990714730406097 C22.009649146649245 -16.77094577271685, 22.372181029221707 -16.551176815027603, 22.716055573605697 -16.342718045390892 M22.716055573605697 -16.342718045390892 C23.055244629908866 -16.106114442971396, 23.39443368621204 -15.8695108405519, 23.741280344578712 -15.627565626425154 M22.716055573605697 -16.342718045390892 C22.95074239625836 -16.179010677337207, 23.18542921891102 -16.015303309283524, 23.741280344578712 -15.627565626425154 M23.741280344578712 -15.627565626425154 C24.051169141446493 -15.380437557410312, 24.361057938314275 -15.13330948839547, 24.71857870850187 -14.848196188198123 M23.741280344578712 -15.627565626425154 C24.069002686945197 -15.366215779445673, 24.396725029311682 -15.104865932466192, 24.71857870850187 -14.848196188198123 M24.71857870850187 -14.848196188198123 C25.06613070096296 -14.53255866436677, 25.413682693424054 -14.216921140535417, 25.643934736767985 -14.007812326905688 M24.71857870850187 -14.848196188198123 C24.909904841725794 -14.67443885621624, 25.10123097494972 -14.500681524234356, 25.643934736767985 -14.007812326905688 M25.643934736767985 -14.007812326905688 C25.845475122218343 -13.799705332154819, 26.0470155076687 -13.59159833740395, 26.513545942968648 -13.10986736009568 M25.643934736767985 -14.007812326905688 C25.901568712220044 -13.741784095108676, 26.159202687672103 -13.475755863311663, 26.513545942968648 -13.10986736009568 M26.513545942968648 -13.10986736009568 C26.72425672684752 -12.862354483568296, 26.9349675107264 -12.614841607040914, 27.323838908126582 -12.158051136245305 M26.513545942968648 -13.10986736009568 C26.68900211778498 -12.903766553417245, 26.86445829260131 -12.69766574673881, 27.323838908126582 -12.158051136245305 M27.323838908126582 -12.158051136245305 C27.61165784860668 -11.772399976846867, 27.899476789086773 -11.386748817448428, 28.071483964640635 -11.156274872382312 M27.323838908126582 -12.158051136245305 C27.57060823966254 -11.827402713135703, 27.817377571198502 -11.496754290026098, 28.071483964640635 -11.156274872382312 M28.071483964640635 -11.156274872382312 C28.251065664365786 -10.880389157166046, 28.430647364090937 -10.604503441949783, 28.753408878604247 -10.108655082055241 M28.071483964640635 -11.156274872382312 C28.2310378956449 -10.91115718813025, 28.390591826649164 -10.666039503878189, 28.753408878604247 -10.108655082055241 M28.753408878604247 -10.108655082055241 C28.984125524120053 -9.698994315348216, 29.214842169635862 -9.28933354864119, 29.3668114742735 -9.019496659696287 M28.753408878604247 -10.108655082055241 C28.89110159812599 -9.86416771564462, 29.028794317647733 -9.619680349233997, 29.3668114742735 -9.019496659696287 M29.3668114742735 -9.019496659696287 C29.51744094106217 -8.706711348955332, 29.66807040785084 -8.393926038214378, 29.90917114880834 -7.893275190886684 M29.3668114742735 -9.019496659696287 C29.47767339160258 -8.789289516297421, 29.588535308931657 -8.559082372898555, 29.90917114880834 -7.893275190886684 M29.90917114880834 -7.893275190886684 C30.054950654621422 -7.5331969930733695, 30.200730160434503 -7.173118795260055, 30.378259229970325 -6.734618561215508 M29.90917114880834 -7.893275190886684 C30.08088585139954 -7.469136555608496, 30.252600553990742 -7.0449979203303075, 30.378259229970325 -6.734618561215508 M30.378259229970325 -6.734618561215508 C30.510475582526897 -6.336403973130103, 30.642691935083466 -5.938189385044699, 30.77214813421488 -5.548287939305138 M30.378259229970325 -6.734618561215508 C30.46822130777116 -6.4636671163899635, 30.558183385571994 -6.192715671564419, 30.77214813421488 -5.548287939305138 M30.77214813421488 -5.548287939305138 C30.88143625434927 -5.131524971461825, 30.99072437448366 -4.714762003618513, 31.08921928754556 -4.339158212148133 M30.77214813421488 -5.548287939305138 C30.866496948272463 -5.188495020268899, 30.960845762330045 -4.828702101232659, 31.08921928754556 -4.339158212148133 M31.08921928754556 -4.339158212148133 C31.15973823863856 -3.9770583024711703, 31.23025718973156 -3.6149583927942075, 31.328169776581777 -3.1121979531509023 M31.08921928754556 -4.339158212148133 C31.152884342995605 -4.012251608026388, 31.21654939844565 -3.6853450039046436, 31.328169776581777 -3.1121979531509023 M31.328169776581777 -3.1121979531509023 C31.383205043840107 -2.685355288238064, 31.438240311098436 -2.2585126233252253, 31.488017702509367 -1.872449005199798 M31.328169776581777 -3.1121979531509023 C31.36871399589532 -2.797744994516755, 31.40925821520886 -2.4832920358826076, 31.488017702509367 -1.872449005199798 M31.488017702509367 -1.872449005199798 C31.51967928577137 -1.3792942891240823, 31.55134086903337 -0.8861395730483667, 31.568106215913414 -0.6250057626472757 M31.488017702509367 -1.872449005199798 C31.5182717201737 -1.4012182594742828, 31.548525737838034 -0.9299875137487675, 31.568106215913414 -0.6250057626472757 M31.568106215913414 -0.6250057626472757 C31.568106215913414 -0.14514103858181904, 31.568106215913414 0.3347236854836376, 31.568106215913414 0.625005762647271 M31.568106215913414 -0.6250057626472757 C31.568106215913414 -0.2427824705418562, 31.568106215913414 0.1394408215635633, 31.568106215913414 0.625005762647271 M31.568106215913414 0.625005762647271 C31.549232802165747 0.9189744161125424, 31.530359388418084 1.2129430695778138, 31.488017702509367 1.8724490051997846 M31.568106215913414 0.625005762647271 C31.538035406332398 1.0933828945921944, 31.507964596751385 1.5617600265371177, 31.488017702509367 1.8724490051997846 M31.488017702509367 1.8724490051997846 C31.43829032780917 2.2581247035936842, 31.388562953108973 2.643800401987584, 31.328169776581777 3.1121979531508885 M31.488017702509367 1.8724490051997846 C31.446775547100742 2.1923150183643134, 31.40553339169212 2.512181031528842, 31.328169776581777 3.1121979531508885 M31.328169776581777 3.1121979531508885 C31.23793745530157 3.575521852316913, 31.147705134021358 4.0388457514829375, 31.08921928754556 4.339158212148129 M31.328169776581777 3.1121979531508885 C31.278770807201568 3.365851220442389, 31.229371837821358 3.6195044877338893, 31.08921928754556 4.339158212148129 M31.08921928754556 4.339158212148129 C30.97777400615153 4.764147370794059, 30.8663287247575 5.189136529439988, 30.772148134214884 5.548287939305125 M31.08921928754556 4.339158212148129 C30.978185583966738 4.762577846205723, 30.86715188038791 5.185997480263316, 30.772148134214884 5.548287939305125 M30.772148134214884 5.548287939305125 C30.6850811035544 5.81051996340706, 30.598014072893914 6.072751987508996, 30.37825922997033 6.734618561215495 M30.772148134214884 5.548287939305125 C30.667140452914076 5.864554344681214, 30.56213277161327 6.180820750057303, 30.37825922997033 6.734618561215495 M30.37825922997033 6.734618561215495 C30.282846752646684 6.970289224879653, 30.187434275323042 7.205959888543811, 29.909171148808344 7.893275190886679 M30.37825922997033 6.734618561215495 C30.266491552490965 7.0106868854705695, 30.154723875011598 7.286755209725643, 29.909171148808344 7.893275190886679 M29.909171148808344 7.893275190886679 C29.693589525396643 8.340935044608873, 29.478007901984945 8.78859489833107, 29.366811474273504 9.019496659696284 M29.909171148808344 7.893275190886679 C29.73128294071762 8.26266386118498, 29.553394732626895 8.632052531483279, 29.366811474273504 9.019496659696284 M29.366811474273504 9.019496659696284 C29.226423716311988 9.26876933975896, 29.086035958350468 9.518042019821637, 28.75340887860425 10.108655082055236 M29.366811474273504 9.019496659696284 C29.214540615990614 9.289868987673945, 29.062269757707725 9.560241315651604, 28.75340887860425 10.108655082055236 M28.75340887860425 10.108655082055236 C28.532061037331975 10.448704806467246, 28.3107131960597 10.788754530879258, 28.07148396464064 11.156274872382301 M28.75340887860425 10.108655082055236 C28.5356401836166 10.443206276638715, 28.31787148862895 10.777757471222195, 28.07148396464064 11.156274872382301 M28.07148396464064 11.156274872382301 C27.90633898866714 11.377554095169975, 27.74119401269364 11.598833317957649, 27.323838908126582 12.158051136245302 M28.07148396464064 11.156274872382301 C27.91632096794698 11.364179152312014, 27.761157971253315 11.572083432241726, 27.323838908126582 12.158051136245302 M27.323838908126582 12.158051136245302 C27.05130462307597 12.47818541510588, 26.778770338025364 12.798319693966457, 26.51354594296866 13.10986736009567 M27.323838908126582 12.158051136245302 C27.08904535591039 12.433853002810041, 26.854251803694194 12.709654869374779, 26.51354594296866 13.10986736009567 M26.51354594296866 13.10986736009567 C26.21824093834751 13.414794022358782, 25.922935933726357 13.719720684621894, 25.64393473676799 14.007812326905684 M26.51354594296866 13.10986736009567 C26.24185676806449 13.390408739280321, 25.97016759316032 13.670950118464972, 25.64393473676799 14.007812326905684 M25.64393473676799 14.007812326905684 C25.294839338345856 14.324851531194572, 24.945743939923723 14.641890735483457, 24.718578708501887 14.848196188198111 M25.64393473676799 14.007812326905684 C25.390592348351216 14.237891180993518, 25.13724995993444 14.467970035081352, 24.718578708501887 14.848196188198111 M24.718578708501887 14.848196188198111 C24.51081763502088 15.013880115544856, 24.303056561539872 15.179564042891602, 23.741280344578715 15.627565626425152 M24.718578708501887 14.848196188198111 C24.440051069696665 15.070314568213526, 24.161523430891442 15.29243294822894, 23.741280344578715 15.627565626425152 M23.741280344578715 15.627565626425152 C23.357495275289416 15.895277476973485, 22.97371020600012 16.162989327521817, 22.716055573605708 16.34271804539089 M23.741280344578715 15.627565626425152 C23.383845384867467 15.876896781209696, 23.02641042515622 16.12622793599424, 22.716055573605708 16.34271804539089 M22.716055573605708 16.34271804539089 C22.407856233713183 16.529550296414097, 22.099656893820658 16.716382547437302, 21.647117264076787 16.990714730406093 M22.716055573605708 16.34271804539089 C22.326942641164102 16.5786005917184, 21.937829708722496 16.814483138045908, 21.647117264076787 16.990714730406093 M21.647117264076787 16.990714730406093 C21.217364488720236 17.214916478039815, 20.787611713363685 17.43911822567354, 20.538857912792388 17.56889292409717 M21.647117264076787 16.990714730406093 C21.256101752627735 17.194707272271675, 20.865086241178687 17.398699814137256, 20.538857912792388 17.56889292409717 M20.538857912792388 17.56889292409717 C20.27711712173545 17.684757808033375, 20.015376330678514 17.80062269196958, 19.395831595147804 18.07487676824742 M20.538857912792388 17.56889292409717 C20.284092240492026 17.681670129869385, 20.029326568191664 17.7944473356416, 19.395831595147804 18.07487676824742 M19.395831595147804 18.07487676824742 C18.964417424832526 18.233641170872318, 18.533003254517244 18.392405573497214, 18.222735251460616 18.506587066708033 M19.395831595147804 18.07487676824742 C18.98812659966758 18.224915975367807, 18.58042160418736 18.374955182488193, 18.222735251460616 18.506587066708033 M18.222735251460616 18.506587066708033 C17.95412104740608 18.58631035248669, 17.685506843351547 18.666033638265347, 17.024389386235413 18.86224982926107 M18.222735251460616 18.506587066708033 C17.834456009266876 18.621826307671803, 17.446176767073133 18.737065548635574, 17.024389386235413 18.86224982926107 M17.024389386235413 18.86224982926107 C16.58940280025944 18.961532678957337, 16.154416214283465 19.060815528653603, 15.805718259676766 19.140403561325773 M17.024389386235413 18.86224982926107 C16.724105420911823 18.930787684810177, 16.423821455588236 18.999325540359283, 15.805718259676766 19.140403561325773 M15.805718259676766 19.140403561325773 C15.5441475688563 19.182692282106622, 15.282576878035833 19.224981002887475, 14.571729652847878 19.3399052695533 M15.805718259676766 19.140403561325773 C15.410725268127264 19.204262964983098, 15.01573227657776 19.268122368640423, 14.571729652847878 19.3399052695533 M14.571729652847878 19.3399052695533 C14.080743208494598 19.38727014134247, 13.589756764141317 19.434635013131636, 13.3274942896239 19.45993515863156 M14.571729652847878 19.3399052695533 C14.321279064373682 19.364065936612505, 14.070828475899484 19.388226603671708, 13.3274942896239 19.45993515863156 M13.3274942896239 19.45993515863156 C12.905705859433162 19.4734610926264, 12.483917429242425 19.486987026621243, 12.078125000000004 19.5 M13.3274942896239 19.45993515863156 C12.916371658603 19.47311906120674, 12.5052490275821 19.486302963781927, 12.078125000000004 19.5 M12.078125000000004 19.5 C12.078125000000002 19.5, 12.078125000000002 19.5, 12.078125 19.5 M12.078125000000004 19.5 C12.078125000000002 19.5, 12.078125000000002 19.5, 12.078125 19.5 M12.078125 19.5 C2.6689733580759185 19.5, -6.740178283848163 19.5, -12.078124999999996 19.5 M12.078125 19.5 C7.240954227663902 19.5, 2.4037834553278046 19.5, -12.078124999999996 19.5 M-12.078124999999996 19.5 C-12.47466306811359 19.487283795970125, -12.871201136227185 19.474567591940247, -13.327494289623893 19.45993515863156 M-12.078124999999996 19.5 C-12.507815446931792 19.486220663708615, -12.937505893863586 19.47244132741723, -13.327494289623893 19.45993515863156 M-13.327494289623893 19.45993515863156 C-13.775275369096214 19.416738256430403, -14.223056448568535 19.373541354229246, -14.571729652847871 19.3399052695533 M-13.327494289623893 19.45993515863156 C-13.702963034026965 19.423714140426227, -14.078431778430037 19.387493122220892, -14.571729652847871 19.3399052695533 M-14.571729652847871 19.3399052695533 C-14.928029303783873 19.282301505135027, -15.284328954719875 19.224697740716753, -15.805718259676759 19.140403561325773 M-14.571729652847871 19.3399052695533 C-15.018412129466283 19.267689110807975, -15.465094606084694 19.19547295206265, -15.805718259676759 19.140403561325773 M-15.805718259676759 19.140403561325773 C-16.17574944138601 19.05594635877976, -16.545780623095258 18.971489156233748, -17.024389386235388 18.862249829261074 M-15.805718259676759 19.140403561325773 C-16.06899031390963 19.08031343295783, -16.3322623681425 19.020223304589887, -17.024389386235388 18.862249829261074 M-17.024389386235388 18.862249829261074 C-17.457010178629652 18.733850248951338, -17.889630971023916 18.6054506686416, -18.22273525146059 18.506587066708043 M-17.024389386235388 18.862249829261074 C-17.305589025578783 18.77879125235098, -17.58678866492218 18.69533267544089, -18.22273525146059 18.506587066708043 M-18.22273525146059 18.506587066708043 C-18.535311522817864 18.39155610942519, -18.847887794175136 18.276525152142334, -19.395831595147797 18.074876768247425 M-18.22273525146059 18.506587066708043 C-18.549230932189033 18.38643363810699, -18.87572661291748 18.266280209505933, -19.395831595147797 18.074876768247425 M-19.395831595147797 18.074876768247425 C-19.675301666476017 17.95116365785554, -19.954771737804236 17.82745054746365, -20.53885791279238 17.568892924097174 M-19.395831595147797 18.074876768247425 C-19.71041200601837 17.935621352051353, -20.024992416888942 17.796365935855285, -20.53885791279238 17.568892924097174 M-20.53885791279238 17.568892924097174 C-20.96287610077802 17.347682907021678, -21.386894288763656 17.126472889946182, -21.64711726407678 16.990714730406097 M-20.53885791279238 17.568892924097174 C-20.83563608506492 17.41406394171808, -21.132414257337462 17.25923495933899, -21.64711726407678 16.990714730406097 M-21.64711726407678 16.990714730406097 C-21.932064115553192 16.817978274507524, -22.21701096702961 16.64524181860895, -22.716055573605686 16.3427180453909 M-21.64711726407678 16.990714730406097 C-21.87289092714718 16.853849409059507, -22.098664590217574 16.716984087712916, -22.716055573605686 16.3427180453909 M-22.716055573605686 16.3427180453909 C-23.117278078706136 16.06284259447514, -23.51850058380659 15.782967143559379, -23.741280344578712 15.627565626425156 M-22.716055573605686 16.3427180453909 C-22.9527840460496 16.177586510824433, -23.189512518493512 16.012454976257967, -23.741280344578712 15.627565626425156 M-23.741280344578712 15.627565626425156 C-23.951544748813642 15.459885359418587, -24.161809153048573 15.292205092412017, -24.71857870850187 14.848196188198125 M-23.741280344578712 15.627565626425156 C-24.08655014478096 15.352222148779118, -24.431819944983207 15.07687867113308, -24.71857870850187 14.848196188198125 M-24.71857870850187 14.848196188198125 C-24.928470980754767 14.657577579983247, -25.138363253007668 14.466958971768367, -25.643934736767974 14.007812326905697 M-24.71857870850187 14.848196188198125 C-24.978152743410277 14.612457917646921, -25.237726778318684 14.376719647095717, -25.643934736767974 14.007812326905697 M-25.643934736767974 14.007812326905697 C-25.915919467755675 13.726965761799194, -26.187904198743375 13.446119196692694, -26.513545942968655 13.109867360095677 M-25.643934736767974 14.007812326905697 C-25.95000383575776 13.691770853458387, -26.256072934747547 13.375729380011077, -26.513545942968655 13.109867360095677 M-26.513545942968655 13.109867360095677 C-26.74096409574245 12.8427290573881, -26.96838224851624 12.575590754680523, -27.32383890812658 12.158051136245307 M-26.513545942968655 13.109867360095677 C-26.744305597835623 12.8388039388926, -26.975065252702592 12.567740517689524, -27.32383890812658 12.158051136245307 M-27.32383890812658 12.158051136245307 C-27.5138556875993 11.903445962636589, -27.703872467072024 11.64884078902787, -28.071483964640635 11.156274872382316 M-27.32383890812658 12.158051136245307 C-27.578099758818446 11.817364759958222, -27.832360609510317 11.476678383671139, -28.071483964640635 11.156274872382316 M-28.071483964640635 11.156274872382316 C-28.32828942315792 10.761752726178573, -28.585094881675207 10.36723057997483, -28.753408878604244 10.108655082055249 M-28.071483964640635 11.156274872382316 C-28.237589403669507 10.901092312478221, -28.403694842698382 10.645909752574125, -28.753408878604244 10.108655082055249 M-28.753408878604244 10.108655082055249 C-28.953619795366592 9.753160325789988, -29.15383071212894 9.39766556952473, -29.3668114742735 9.019496659696289 M-28.753408878604244 10.108655082055249 C-28.990591680218635 9.68751300042588, -29.227774481833027 9.266370918796511, -29.3668114742735 9.019496659696289 M-29.3668114742735 9.019496659696289 C-29.505149828518064 8.73223410714085, -29.643488182762628 8.44497155458541, -29.90917114880834 7.893275190886686 M-29.3668114742735 9.019496659696289 C-29.560758527768968 8.616761453310794, -29.75470558126443 8.214026246925298, -29.90917114880834 7.893275190886686 M-29.90917114880834 7.893275190886686 C-30.068327032167527 7.500157081919825, -30.22748291552671 7.107038972952965, -30.378259229970325 6.73461856121551 M-29.90917114880834 7.893275190886686 C-30.049635615368604 7.546325242787117, -30.190100081928872 7.199375294687548, -30.378259229970325 6.73461856121551 M-30.378259229970325 6.73461856121551 C-30.47508506835318 6.442994563108648, -30.57191090673604 6.151370565001787, -30.77214813421488 5.5482879393051325 M-30.378259229970325 6.73461856121551 C-30.49402754101333 6.385942853529431, -30.60979585205634 6.037267145843353, -30.77214813421488 5.5482879393051325 M-30.77214813421488 5.5482879393051325 C-30.858450502074703 5.219179606972798, -30.944752869934522 4.890071274640464, -31.089219287545557 4.339158212148136 M-30.77214813421488 5.5482879393051325 C-30.860102278484607 5.212880667637399, -30.948056422754338 4.877473395969665, -31.089219287545557 4.339158212148136 M-31.089219287545557 4.339158212148136 C-31.151662154685344 4.018527286689986, -31.214105021825127 3.6978963612318356, -31.328169776581777 3.112197953150904 M-31.089219287545557 4.339158212148136 C-31.141098901592052 4.072767358779691, -31.19297851563855 3.8063765054112455, -31.328169776581777 3.112197953150904 M-31.328169776581777 3.112197953150904 C-31.361263997844482 2.8555257082305388, -31.394358219107186 2.5988534633101734, -31.488017702509364 1.872449005199809 M-31.328169776581777 3.112197953150904 C-31.391465638793836 2.6212877450159255, -31.454761501005894 2.130377536880947, -31.488017702509364 1.872449005199809 M-31.488017702509364 1.872449005199809 C-31.50716490426539 1.5742158825066113, -31.526312106021418 1.2759827598134135, -31.568106215913414 0.6250057626472781 M-31.488017702509364 1.872449005199809 C-31.519635439188885 1.3799772350385917, -31.551253175868403 0.8875054648773743, -31.568106215913414 0.6250057626472781 M-31.568106215913414 0.6250057626472781 C-31.568106215913414 0.24292250646055835, -31.568106215913414 -0.13916074972616144, -31.568106215913414 -0.6250057626472687 M-31.568106215913414 0.6250057626472781 C-31.568106215913414 0.26210546039243143, -31.568106215913414 -0.10079484186241527, -31.568106215913414 -0.6250057626472687 M-31.568106215913414 -0.6250057626472687 C-31.547777390528793 -0.9416436271452705, -31.52744856514417 -1.2582814916432723, -31.488017702509367 -1.8724490051997822 M-31.568106215913414 -0.6250057626472687 C-31.541692744647236 -1.0364168981882753, -31.515279273381054 -1.4478280337292821, -31.488017702509367 -1.8724490051997822 M-31.488017702509367 -1.8724490051997822 C-31.441421048225827 -2.2338434542727614, -31.39482439394229 -2.5952379033457404, -31.328169776581777 -3.112197953150895 M-31.488017702509367 -1.8724490051997822 C-31.427764605740833 -2.3397601254167815, -31.3675115089723 -2.807071245633781, -31.328169776581777 -3.112197953150895 M-31.328169776581777 -3.112197953150895 C-31.25918725586713 -3.4664086175597038, -31.190204735152477 -3.820619281968512, -31.08921928754556 -4.339158212148126 M-31.328169776581777 -3.112197953150895 C-31.238211620909546 -3.57411406986488, -31.14825346523731 -4.036030186578865, -31.08921928754556 -4.339158212148126 M-31.08921928754556 -4.339158212148126 C-30.980610576903473 -4.753330297139359, -30.872001866261385 -5.167502382130593, -30.772148134214884 -5.548287939305123 M-31.08921928754556 -4.339158212148126 C-31.0241464520364 -4.587309136689864, -30.95907361652724 -4.835460061231602, -30.772148134214884 -5.548287939305123 M-30.772148134214884 -5.548287939305123 C-30.620741959322558 -6.004299214782854, -30.46933578443023 -6.460310490260586, -30.378259229970332 -6.734618561215485 M-30.772148134214884 -5.548287939305123 C-30.673939414331 -5.8440769561608406, -30.57573069444711 -6.1398659730165575, -30.378259229970332 -6.734618561215485 M-30.378259229970332 -6.734618561215485 C-30.22709673391091 -7.107992849010307, -30.075934237851484 -7.481367136805128, -29.909171148808344 -7.893275190886676 M-30.378259229970332 -6.734618561215485 C-30.23150781902867 -7.097097383486902, -30.08475640808701 -7.459576205758318, -29.909171148808344 -7.893275190886676 M-29.909171148808344 -7.893275190886676 C-29.797004136187418 -8.126192392583633, -29.68483712356649 -8.359109594280588, -29.366811474273504 -9.019496659696282 M-29.909171148808344 -7.893275190886676 C-29.722018129883292 -8.281902439117651, -29.534865110958243 -8.670529687348626, -29.366811474273504 -9.019496659696282 M-29.366811474273504 -9.019496659696282 C-29.15606534276147 -9.393697756555788, -28.94531921124943 -9.767898853415295, -28.753408878604247 -10.108655082055243 M-29.366811474273504 -9.019496659696282 C-29.224327910419355 -9.272490655344685, -29.081844346565205 -9.525484650993087, -28.753408878604247 -10.108655082055243 M-28.753408878604247 -10.108655082055243 C-28.508358465466596 -10.485118321884208, -28.263308052328945 -10.861581561713173, -28.07148396464064 -11.156274872382308 M-28.753408878604247 -10.108655082055243 C-28.52080941726222 -10.465990316377432, -28.28820995592019 -10.823325550699622, -28.07148396464064 -11.156274872382308 M-28.07148396464064 -11.156274872382308 C-27.82765386729766 -11.482984989443066, -27.583823769954673 -11.809695106503824, -27.323838908126586 -12.158051136245302 M-28.07148396464064 -11.156274872382308 C-27.874314753078508 -11.420463653390872, -27.677145541516374 -11.684652434399435, -27.323838908126586 -12.158051136245302 M-27.323838908126586 -12.158051136245302 C-27.101298991889585 -12.41945918473724, -26.878759075652585 -12.68086723322918, -26.513545942968662 -13.10986736009567 M-27.323838908126586 -12.158051136245302 C-27.156765618233944 -12.35430492929271, -26.989692328341302 -12.550558722340115, -26.513545942968662 -13.10986736009567 M-26.513545942968662 -13.10986736009567 C-26.258789908552984 -13.372923881489264, -26.004033874137306 -13.635980402882858, -25.643934736767996 -14.007812326905677 M-26.513545942968662 -13.10986736009567 C-26.242331692760835 -13.389918340539303, -25.97111744255301 -13.669969320982936, -25.643934736767996 -14.007812326905677 M-25.643934736767996 -14.007812326905677 C-25.367910409882345 -14.25849031737974, -25.09188608299669 -14.509168307853802, -24.718578708501887 -14.848196188198107 M-25.643934736767996 -14.007812326905677 C-25.437537478020324 -14.195256856328097, -25.231140219272657 -14.382701385750517, -24.718578708501887 -14.848196188198107 M-24.718578708501887 -14.848196188198107 C-24.415646820482934 -15.089776307537129, -24.11271493246398 -15.331356426876148, -23.74128034457872 -15.627565626425149 M-24.718578708501887 -14.848196188198107 C-24.406345282431054 -15.097194036609178, -24.094111856360225 -15.346191885020248, -23.74128034457872 -15.627565626425149 M-23.74128034457872 -15.627565626425149 C-23.3478460253203 -15.902008376042641, -22.954411706061883 -16.176451125660133, -22.71605557360571 -16.342718045390885 M-23.74128034457872 -15.627565626425149 C-23.515996613149564 -15.784713805094574, -23.29071288172041 -15.941861983764, -22.71605557360571 -16.342718045390885 M-22.71605557360571 -16.342718045390885 C-22.294190734551965 -16.598454989978244, -21.872325895498218 -16.8541919345656, -21.64711726407679 -16.99071473040609 M-22.71605557360571 -16.342718045390885 C-22.44170515758969 -16.5090308798418, -22.167354741573668 -16.675343714292715, -21.64711726407679 -16.99071473040609 M-21.64711726407679 -16.99071473040609 C-21.298487474888077 -17.172594668117807, -20.94985768569936 -17.35447460582952, -20.538857912792388 -17.56889292409717 M-21.64711726407679 -16.99071473040609 C-21.381582146343536 -17.12924423124417, -21.11604702861028 -17.267773732082247, -20.538857912792388 -17.56889292409717 M-20.538857912792388 -17.56889292409717 C-20.176577023604004 -17.72926392706012, -19.814296134415624 -17.889634930023067, -19.395831595147804 -18.07487676824742 M-20.538857912792388 -17.56889292409717 C-20.105528012326197 -17.76071521675877, -19.672198111860006 -17.952537509420367, -19.395831595147804 -18.07487676824742 M-19.395831595147804 -18.07487676824742 C-19.153485066869703 -18.16406253088051, -18.9111385385916 -18.253248293513604, -18.22273525146062 -18.506587066708033 M-19.395831595147804 -18.07487676824742 C-19.07164907481089 -18.194178932441773, -18.74746655447397 -18.313481096636128, -18.22273525146062 -18.506587066708033 M-18.22273525146062 -18.506587066708033 C-17.74542479099886 -18.648250305919348, -17.268114330537102 -18.789913545130663, -17.024389386235413 -18.862249829261067 M-18.22273525146062 -18.506587066708033 C-17.794334308353672 -18.633734217899736, -17.36593336524673 -18.76088136909144, -17.024389386235413 -18.862249829261067 M-17.024389386235413 -18.862249829261067 C-16.61155785700956 -18.956475931829374, -16.19872632778371 -19.050702034397684, -15.805718259676768 -19.140403561325773 M-17.024389386235413 -18.862249829261067 C-16.619113243384064 -18.9547514641929, -16.213837100532718 -19.04725309912473, -15.805718259676768 -19.140403561325773 M-15.805718259676768 -19.140403561325773 C-15.456784804110148 -19.19681641640242, -15.107851348543528 -19.25322927147907, -14.57172965284788 -19.3399052695533 M-15.805718259676768 -19.140403561325773 C-15.388559079994508 -19.207846622379044, -14.971399900312248 -19.27528968343232, -14.57172965284788 -19.3399052695533 M-14.57172965284788 -19.3399052695533 C-14.305495014843098 -19.365588604887623, -14.039260376838314 -19.391271940221944, -13.327494289623903 -19.45993515863156 M-14.57172965284788 -19.3399052695533 C-14.198441035567281 -19.375915973517113, -13.825152418286683 -19.411926677480928, -13.327494289623903 -19.45993515863156 M-13.327494289623903 -19.45993515863156 C-12.972596738670928 -19.471316032324445, -12.617699187717953 -19.482696906017328, -12.078125000000005 -19.5 M-13.327494289623903 -19.45993515863156 C-12.970953446252873 -19.471368729513816, -12.614412602881842 -19.482802300396074, -12.078125000000005 -19.5 M-12.078125000000005 -19.5 C-12.078125000000004 -19.5, -12.078125000000004 -19.5, -12.078125 -19.5 M-12.078125000000005 -19.5 C-12.078125000000004 -19.5, -12.078125000000004 -19.5, -12.078125 -19.5"
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
          <g
            className="node default"
            id="inference_diagram-flowchart-types-2"
            data-look="classic"
            transform="translate(239.3359375, 134.5)"
          >
            <polygon
              points="-43.5,0 215,0 258.5,-87 0,-87"
              className="label-container"
              transform="translate(-107.5,43.5)"
            />
            <g className="label" style={{}} transform="translate(-100, -36)">
              <rect />
              <foreignObject width={200} height={72}>
                <div
                  style={{
                    display: "table",
                    whiteSpace: "break-spaces",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                    width: 200,
                  }}
                >
                  <span className="nodeLabel markdown-node-label">
                    <p>
                      <em>{"INPUT"}</em>
                      {" The gathered types and constraints"}
                    </p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
          <g
            className="node default"
            id="inference_diagram-flowchart-ambiguous-3"
            data-look="classic"
            transform="translate(346.46875, 1402.90625)"
          >
            <polygon
              points="-31.5,0 215,0 246.5,-63 0,-63"
              className="label-container"
              transform="translate(-107.5,31.5)"
            />
            <g className="label" style={{}} transform="translate(-100, -24)">
              <rect />
              <foreignObject width={200} height={48}>
                <div
                  style={{
                    display: "table",
                    whiteSpace: "break-spaces",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                    width: 200,
                  }}
                >
                  <span className="nodeLabel markdown-node-label">
                    <p>
                      <em>{"OUTPUT"}</em>
                      {" error[AMBIGUOUS]"}
                    </p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
          <g
            className="node default"
            id="inference_diagram-flowchart-contradiction-4"
            data-look="classic"
            transform="translate(151, 789.203125)"
          >
            <polygon
              points="-31.5,0 215,0 246.5,-63 0,-63"
              className="label-container"
              transform="translate(-107.5,31.5)"
            />
            <g className="label" style={{}} transform="translate(-100, -24)">
              <rect />
              <foreignObject width={200} height={48}>
                <div
                  style={{
                    display: "table",
                    whiteSpace: "break-spaces",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                    width: 200,
                  }}
                >
                  <span className="nodeLabel markdown-node-label">
                    <p>
                      <em>{"OUTPUT"}</em>
                      {" error[CONTRADICTION]"}
                    </p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
          <g
            className="node default"
            id="inference_diagram-flowchart-success-5"
            data-look="classic"
            transform="translate(624.4765625, 1402.90625)"
          >
            <polygon
              points="-19.5,0 159.015625,0 178.515625,-39 0,-39"
              className="label-container"
              transform="translate(-79.5078125,19.5)"
            />
            <g
              className="label"
              style={{}}
              transform="translate(-72.0078125, -12)"
            >
              <rect />
              <foreignObject width={144.015625} height={24}>
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
                      {" Success!"}
                    </p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
          <g
            className="node default"
            id="inference_diagram-flowchart-uncertainty-6"
            data-look="classic"
            transform="translate(392.80208333333337, 1127.40625)"
          >
            <polygon
              points="139,0 278,-139 139,-278 0,-139"
              className="label-container"
              transform="translate(-138.5, 139)"
            />
            <g className="label" style={{}} transform="translate(-100, -24)">
              <rect />
              <foreignObject width={200} height={48}>
                <div
                  style={{
                    display: "table",
                    whiteSpace: "break-spaces",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                    width: 200,
                  }}
                >
                  <span className="nodeLabel">
                    <p>{"Are all types certain?"}</p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
          <g
            className="node default"
            id="inference_diagram-flowchart-constraints-7"
            data-look="classic"
            transform="translate(197.33333333333331, 451)"
          >
            <polygon
              points="139,0 278,-139 139,-278 0,-139"
              className="label-container"
              transform="translate(-138.5, 139)"
            />
            <g className="label" style={{}} transform="translate(-100, -24)">
              <rect />
              <foreignObject width={200} height={48}>
                <div
                  style={{
                    display: "table",
                    whiteSpace: "break-spaces",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                    width: 200,
                  }}
                >
                  <span className="nodeLabel">
                    <p>{"Are all constraints satisfied?"}</p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
          <g
            className="node default"
            id="inference_diagram-flowchart-progress-8"
            data-look="classic"
            transform="translate(424.203125, 789.203125)"
          >
            <polygon
              points="94.203125,0 188.40625,-94.203125 94.203125,-188.40625 0,-94.203125"
              className="label-container"
              transform="translate(-93.703125, 94.203125)"
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
                  <span className="nodeLabel">
                    <p>{"Made progress?"}</p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
          <g
            className="node default"
            id="inference_diagram-flowchart-expansion-9"
            data-look="classic"
            transform="translate(239.3359375, 245)"
          >
            <rect
              className="basic label-container"
              style={{}}
              x={-126.0078125}
              y={-27}
              width={252.015625}
              height={54}
            />
            <g
              className="label"
              style={{}}
              transform="translate(-96.0078125, -12)"
            >
              <rect />
              <foreignObject width={192.015625} height={24}>
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
                    <p>{"Expand all the types"}</p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
          <g
            className="node default"
            id="inference_diagram-flowchart-assertions-10"
            data-look="classic"
            transform="translate(701.8020833333334, 1039.40625)"
          >
            <rect
              className="basic label-container"
              style={{}}
              x={-130}
              y={-51}
              width={260}
              height={102}
            />
            <g className="label" style={{}} transform="translate(-100, -36)">
              <rect />
              <foreignObject width={200} height={72}>
                <div
                  style={{
                    display: "table",
                    whiteSpace: "break-spaces",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                    width: 200,
                  }}
                >
                  <span className="nodeLabel markdown-node-label">
                    <p>
                      {"Satisfy assertions and remove invalid possibilities"}
                    </p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
        </g>
      </g>
    </g>
    <defs>
      <filter id="inference_diagram-drop-shadow" height="130%" width="130%">
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
        id="inference_diagram-drop-shadow-small"
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
      id="inference_diagram-gradient"
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

export default InferenceSVG;
