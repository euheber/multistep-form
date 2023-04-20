export function summary():string{ 
    return `
    <h2 class="text-4xl text-Marine-blue font-semibold">Quase lá</h2>
    <p class="text-Cool-gray mb-5">Confirme suas escolhas abaixo</p>


    <div class="container">

      <div class="border-b border-Light-gray flex items-center justify-between pb-6">
        <div class="plan">
          <h1 class="text-md text-Marine-blue font-bold">Arcade (Mensal)</h1>
          <span class="text-sm text-Cool-gray cursor-pointer border-b border-Cool-gray">Trocar</span>
        </div>
        <p class="text-md text-Marine-blue font-semibold">R$9,00/mês</p>
      </div>
      <div class="flex justify-between mt-3">
        <p class="text-Cool-gray">Serviços online</p>
        <p class="text-md font-semibold text-Marine-blue">+R$10,00/mês</p>
      </div>
      <div class="flex justify-between mt-3">
        <p class="text-Cool-gray">Mias espaço</p>
        <p class="text-md font-semibold text-Marine-blue">+R$20,00/mês</p>
      </div>

      <div class="flex justify-between mt-10">
        <p class="text-Cool-gray">Total (por mês)</p>
        <p class="text-lg font-bold text-Purplish-blue">R$39,00/mês</p>
      </div>
    </div>
    `
}