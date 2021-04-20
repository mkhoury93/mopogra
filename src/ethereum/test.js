<a-scene>
  <a-assets>
    <a-mixin id="cube" geometry="primitive: box"></a-mixin>
    <a-mixin id="cube-hovered" material="color: magenta"></a-mixin>
    <a-mixin id="cube-selected" material="color: cyan"></a-mixin>
    <a-mixin id="red" material="color: red"></a-mixin>
    <a-mixin id="green" material="color: green"></a-mixin>
    <a-mixin id="blue" material="color: blue"></a-mixin>
    <a-mixin id="yellow" material="color: yellow"></a-mixin>
    <a-mixin id="sphere" geometry="primitive: sphere"></a-mixin>
  </a-assets>

  <a-entity position="0 2.2 4">
    <a-entity camera look-controls wasd-controls>
      <a-entity
        position="0 0 -3"
        geometry="primitive: ring; radiusInner: 0.2; radiusOuter: 0.3;"
        material="color: cyan; shader: flat"
        cursor="maxDistance: 30; fuse: true"
      >
        <a-animation
          begin="click"
          easing="ease-in"
          attribute="scale"
          fill="forwards"
          from="0.2 0.2 0.2"
          to="1 1 1"
          dur="150"
        ></a-animation>
        <a-animation
          begin="fusing"
          easing="ease-in"
          attribute="scale"
          fill="backwards"
          from="1 1 1"
          to="0.2 0.2 0.2"
          dur="1500"
        ></a-animation>
      </a-entity>
    </a-entity>
  </a-entity>

  <a-entity position="-3.5 1 0">
    <a-entity mixin="cube red">
      <a-animation
        begin="click"
        attribute="position"
        from="0 0 0"
        to="0 0 -10"
        dur="2000"
        fill="both"
      ></a-animation>
    </a-entity>
  </a-entity>

  <a-entity position="0 1 0">
    <a-entity mixin="cube green">
      <a-animation
        begin="click"
        attribute="rotation"
        to="0 360 0"
        easing="linear"
        dur="2000"
        fill="backwards"
      ></a-animation>
    </a-entity>
  </a-entity>

  <a-entity position="3.5 1 0" rotation="0 45 0">
    <a-entity mixin="cube blue">
      <a-animation
        begin="click"
        fill="forwards"
        repeat="1"
        direction="alternate"
        attribute="position"
        from="0 0 0"
        to="15 0 0"
        dur="2000"
      ></a-animation>
    </a-entity>
  </a-entity>

  <a-entity
    position="0 3 0"
    class="clickable"
    mixin="cube yellow"
    rotation="0 45 0"
    scale=".5 .5 .5"
  ></a-entity>
</a-scene>;
