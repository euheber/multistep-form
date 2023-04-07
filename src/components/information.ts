export function information(): string {
  return `
    <form id="form" class="form space-y-4">
  <div>
      <h2 class="text-4xl text-Marine-blue font-semibold">Informações Pessoais</h2>
      <p class="text-Cool-gray mb-5">Forneça seu nome, email e número de telefone</p>
  </div>
        <div class="form-field flex flex-col">
          <label for="name" class="text-Marine-blue font-semibold">Nome</label>
          <input type="text" placeholder="Digite seu some" id="name" class="border border-Cool-gray p-2 rounded-lg inputField cursor-pointer hover:border-Purplish-blue transition duration-75">
        </div>

        <div class="form-field flex flex-col">
          <label for="email" class="text-Marine-blue font-semibold">Email</label>
          <input type="text" id="email" placeholder="Digite seu email" class="border border-Cool-gray p-2 rounded-lg inputField cursor-pointer hover:border-Purplish-blue transition duration-75">
        </div>

        <div class="form-field flex flex-col">
          <label for="phone" class="text-Marine-blue font-semibold">Telefone</label>
          <input type="text" id="number" placeholder="Digite seu número de telefone" class="border border-Cool-gray p-2 rounded-lg inputField cursor-pointer hover:border-Purplish-blue transition duration-75">
        </div>
  </form>

      `
}
