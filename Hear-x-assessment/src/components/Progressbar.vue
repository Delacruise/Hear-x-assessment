<template>
  <div class="Progressbar" id="progress">
    <div id="bar">10%</div>
  </div>
</template>

<script>
  export default {
    name: 'Progressbar',
    data () {
      return {
        i : 0,
        width : 0     
      }
    },
    methods: {        
      move(widthIncrease) {
        debugger;
        if (this.width != 100) {
          var elem = document.getElementById("progress")
          this.width =+ widthIncrease
          elem.style.width = this.width + "%"
          elem.innerHTML = this.width + "%"
          /*
          var id = setInterval(frame, 10);
          function frame() {
            if (width >= 100) {
              clearInterval(id);
              i = 0;
            } else {
              width++;
              elem.style.width = width + "%";
              elem.innerHTML = width  + "%";
            }
          }
          */
        }
      }
    }
  }
</script>

<style>
#progress {
  width: 10%;
  height: 30px;
  background-color: #4CAF50;
  text-align: center; /* To center it horizontally (if you want) */
  line-height: 30px; /* To center it vertically */
  color: white;
  display: none;
}
</style>
