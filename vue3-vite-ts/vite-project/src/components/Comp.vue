<script lang="jsx">
  import {ref} from 'vue'
  
  export default {
    setup() {
      const counter = ref(100)

      const handleClick = () => {
        counter.value++;
      }

      return () => (
        <>
          <div>comp</div>
          <p onClick={handleClick}>{counter.value}</p>
        </>
      )
    }
  };

  // 原始jsx写法
  // export default {
  //   data() {
  //     return {
  //       counter: 10
  //     }
  //   },
  //   render() {
  //     return (
  //       <>
  //         <div>comp</div>
  //         <p onClick={this.handleClick}>{this.counter}</p>
  //       </>
  //     )
  //   },
  //   methods: {
  //     handleClick(){
  //       this.counter++;
  //     }
  //   }
  // }
</script>

<style scoped>

</style>