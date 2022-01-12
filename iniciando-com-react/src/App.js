import React from 'react';


function App(props) {

  // state = {
  //   nome: ''
  // }
  // constructor() {
  //   super()
  //   this.modificarNomeN = this.modificarNomeN.bind(this)

  // }

  // modificarNomeN(event) {
  //   let nome = event.target.value;
  //   this.setState({
  //     nome: nome

  //   })
  // }
  //modificarNome = (event) => {
  // let nome = event.target.value;
  // this.setState({
  //   nome: nome

  // })
  // }
  const modificarNome = event => {
    console.log(event.target.value);
  }

  const criarComboBox = () => {
    const opcoes = ["Fulano", "Ciclano"]
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)
    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }
  // componentDidMount() {
  //   console.log('Executou o componente componentDidMount')

  // }

  // render() {

  const MeuComboBox = () => criarComboBox()
  return (
    <>
      <input className="texto-centralizado" type="text" value={props.nome} onChange={modificarNome} />

      <h2>Hello {props.nome}  {props.idade} </h2>
      {/* <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello {this.state.nome} </h1>
        <h2>Hello {this.props.nome}  {this.props.idade} </h2> */}
      <MeuComboBox></MeuComboBox>
    </>
  )

  // }

}





export default App;
