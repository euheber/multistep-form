export function information(): string {
  return `
        <h2 class="text-4xl text-Marine-blue font-semibold">Informações Pessoais</h2>
        <span class="text-Cool-gray mb-8 block">Forneça seu nome, email e número de telefone</span>
          <form id="form" class="form space-y-5">
              <div class="form-field flex flex-col">
                <label for="name" class="text-Purplish-blue font-semibold">Nome</label>
                <input type="text" placeholder="Digite seu some" id="name" class="border border-Cool-gray p-2 rounded-lg">
              </div>

              <div class="form-field flex flex-col">
                <label for="email" class="text-Purplish-blue font-semibold">Email</label>
                <input type="text" id="email" placeholder="Digite seu email" class="border border-Cool-gray p-2 rounded-lg">
              </div>

              <div class="form-field flex flex-col">
                <label for="phone" class="text-Purplish-blue font-semibold">Telefone</label>
                <input type="text" id="number" placeholder="Digite seu número de telefone" class="border border-Cool-gray p-2 rounded-lg">
              </div>
        </form>`
}
