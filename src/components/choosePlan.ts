export function plan(): string {
  return `
  <h2 class="text-4xl text-Marine-blue font-semibold">Selecione seu plano</h2>
  <p class="text-Cool-gray mb-5">Você pode escolher entre a assinatura  mensal ou anual.</p>

  <div class="plans-container flex gap-5">
    <div class="border border-Cool-gray rounded-lg w-32 h-32 p-2 hover:border-Purplish-blue transition duration-150 cursor-pointer">
      <img src="/assets/images/icon-arcade.svg" alt="Icone arcade" class="mb-5">

      <h1 class="text-Marine-blue font-semibold">Arcade</h1>
      <span class="text-Cool-gray text-sm">R$ 9,00/mes</span>
    </div>

    <div class="border border-Cool-gray rounded-lg w-32 h-32 p-2 hover:border-Purplish-blue transition duration-150 cursor-pointer">
      <img src="/assets/images/icon-advanced.svg" alt="Icone arcade" class="mb-5">

      <h1 class="text-Marine-blue font-semibold">Avançado</h1>
      <span class="text-Cool-gray text-sm">R$ 12,00/mes</span>
    </div>

    <div class="border border-Cool-gray rounded-lg w-32 h-32 p-2 hover:border-Purplish-blue transition duration-150 cursor-pointer">
      <img src="/assets/images/icon-pro.svg" alt="Icone arcade" class="mb-5">

      <h1 class="text-Marine-blue font-semibold">Profissional</h1>
      <span class="text-Cool-gray text-sm">R$ 15,00/mes</span>
    </div>
  </div>
</div>

  `
}
