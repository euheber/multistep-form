export function addOns():string{
    return `
    
    <h2 class="text-4xl text-Marine-blue font-semibold">Selecione um complemento</h2>
    <p class="text-Cool-gray mb-5">Escolher um complemento melhora a sua experiência.</p>

    
    <form class="flex flex-col gap-4">
      <label id="default-checkbox" class="border border-Cool-gray rounded-lg hover:border-Purplish-blue w-full p-4 cursor-pointer transition duration-150 flex items-center gap-4">
        <input for="default-checkbox" type="checkbox" class="accent-Marine-blue group-checked:border-Strawberry-red" /> 

          <div>
            <h1 class="texts-sm font-semibold text-Marine-blue">Serviços online</h1>
            <span class="text-Cool-gray text-sm">Acesso a jogos multiplayer</span>
          </div>
          <div class="ml-auto">
            <span class="text-sm text-Purplish-blue">+R$10/mês</span>
          </div>
        </label>

        <label id="default-checkbox" class="border border-Cool-gray rounded-lg hover:border-Purplish-blue w-full p-4 cursor-pointer transition duration-150 flex items-center gap-4">
          <input for="default-checkbox" type="checkbox" class="accent-Marine-blue" /> 

            <div>
              <h1 class="texts-sm font-semibold text-Marine-blue">Mais espaço</h1>
              <span class="text-Cool-gray text-sm">1TB de espaço extra na nuvem</span>
            </div>
            <div class="ml-auto">
              <span class="text-sm text-Purplish-blue">+R$20/mês</span>
            </div>
          </label>
          
          <label id="default-checkbox" class="border border-Cool-gray rounded-lg hover:border-Purplish-blue w-full p-4 cursor-pointer transition duration-150 flex items-center gap-4">
            <input for="default-checkbox" type="checkbox" class="accent-Marine-blue" /> 

              <div>
                <h1 class="texts-sm font-semibold text-Marine-blue">Perfil customizavel</h1>
                <span class="text-Cool-gray text-sm">Customize o tema do seu perfil</span>
              </div>
              <div class="ml-auto">
                <span class="text-sm text-Purplish-blue">+R$20/mês</span>
              </div>
            </label>

    </form>
    
    `
}