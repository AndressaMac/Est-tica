

export default function FormSigin(){



    return(

    <div>
  <form  >
  <div  >
    <label htmlFor="inputName"  >Nome</label>
    <input type="text"   id="inputName"/>
  </div>

  <div  >
    <label htmlFor="idade"  >Idade</label>
    <input type="number"   id="inputidade"/>
  </div>
  
  <div>
  <label>Genero</label>
  <select  aria-label="Default select example">
  <option selected>Selecione</option>
  <option value="1">Feminino</option>
  <option value="2">Masculino</option>
  <option value="3">Não identificar</option>
  </select>
  </div>

  <div  >
    <label htmlFor="cpf"  >CPF</label>
    <input type="number"   id="cpf"/>
  </div>
 


  <div>
  <label>Ocupação</label>
  <select  aria-label="Default select example">
  <option selected>Selecione</option>
  <option value="1">Esteticista</option>
  <option value="2">Fisioterapeuta</option>
  <option value="3">Biomedica</option>
  <option value="4">Enfermira</option>
  </select>
  </div>

  <div  >
    <label htmlFor="empresa"  >Empresa</label>
    <input type="text"   id="empresa"/>
  </div>

  <div  >
    <label htmlFor="cnpj"  >Cnpj</label>
    <input type="number"   id="cnpj"/>
  </div>

  <div >
    <label htmlFor="inputAddress"  >Address</label>
    <input type="text"   id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div  >
    <label htmlFor="inputAddress2"  >Address 2</label>
    <input type="text"   id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div  >
    <label htmlFor="inputCity"  >Cidade</label>
    <input type="text"   id="inputCity"/>
  </div>
  
  <div  >
    <label htmlFor="inputZip"  >CEP</label>
    <input type="text"   id="inputZip"/>
  </div>
  <div class="mb-3">
  <label htmlFor="email" >Email </label>
  <input type="email" id="email"/>
</div>

  <div  >
    <label htmlFor="inputPassword4"  >Password</label>
    <input type="password"   id="inputPassword4"/>
  </div>

  <div >
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Free
  </label>
</div>

  <div >
  <input  type="buy"  id="buy" disabled/>
  <label  htmlFor="buy">
    Buy
  </label>
</div>

<div >
    <button type="submit"  >Sign in</button>
  </div>
</form>
    </div>
)


}