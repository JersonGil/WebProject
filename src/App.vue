
<div id='vueapp'>
    <div>
        <p>
            Nombre: <input v-model="nombre" />
        </p>
        <p>
            Tel&eacute;fono: <input v-model="telefono" />
        </p>
        <p>
            <button v-on:click="enviar">Enviar</button>
        </p>
    </div>
 
    <h2>Listado de registros</h2>
    <div>
        <div v-for="r in regs">
            <div>{{ r.nombre }}, {{ r.telefono }}</div>
        </div>
    </div>
</div>
<!-- Importamos Vue.js (Siempre al final) -->
<script>
var app = new Vue({
  el: '#vueapp',
  data: {
    nombre: '',
    telefono: '',
    regs: []
    },
  methods: {
 
    reloadList: function() {
        this.$http.get('data.php').then(function(response){
                this.regs = response.body;
            }, function(){
                alert('Error!');
            });
        },
 
    enviar: function() {
        this.$http.post('data.php',{
            nombre: this.nombre,
            telefono: this.telefono
            }).then(function(response){
                    this.regs = response.body;
                this.nombre="";
                this.telefono="";
                    });
        }
 
    },
  created: function() {
    this.reloadList();
    }
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
