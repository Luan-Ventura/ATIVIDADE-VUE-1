const { createApp } = Vue

createApp({
  data() {
    return {
      novaTarefa: "",
      tarefas: ["Comprar pão", "Comprar leite", "Comprar café"]
    }
  },
  methods: {
    cadastrarNovaTarefa() {
      // Verifica se a nova tarefa não está em branco e não está presente na lista de tarefas
      if (this.novaTarefa.trim() !== "" && !this.tarefas.includes(this.novaTarefa)) {
        this.tarefas.push(this.novaTarefa)
        this.novaTarefa = "" // Limpa o campo após adicionar a tarefa
      }
    }
  } 
}).mount('#app')
