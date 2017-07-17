<template>  
  <div class="hello">
    <div>
      <span>{{ msg }}</span>
      <i></i>
    </div>

    <ul>
      <li>
        <router-link to="Photo">Photos</router-link>
      </li>
      <li>
        <router-link to="MyWork">My Work</router-link>
      </li>
      <li>
        <router-link to="HaveFun">Have some fun!</router-link>
      </li>
    </ul>


  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'How are you going today?'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

span {
  color: #E8CCFF;
  font-weight: 300;
  font-size: 50px;
  margin-bottom: 0;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .3)
}

</style>
