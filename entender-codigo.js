const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const autentica = (cargo) => {
    let array = new Array()
    for( i = 0; i < cargo; i++){ //for = para i = indice, i++ = adiciona +1 e compara de novo com o indice enquanto o indice for menor que cargo.
      array.push(i) // push = empurar dado na variavel
    }
    return true; //Preciso descobrir

  }
  
  const login = (pessoa, autentica) => {
    if(pessoa.cargo === `funcionario`) { // === (verifica o tipo e e valor)
       autentica(90000)
    } else if(pessoa.cargo === `diretoria`) {
       autentica(900000)
    }
   return acesso(pessoa.nome)
  }
  // git add .
  // commit no github: git commit -m "nome do commit"