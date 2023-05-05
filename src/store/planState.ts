type TPlan = {
    name: string,
    price: number,
    type: string
}

class PlanContext {
    private plan: TPlan = {
            name: 'Arcade',
            price: 9,
            type: 'mês'
        }

    static instance = new PlanContext();

    static getInstance() {
        return this.instance;
    }

    setPlan({ name, price, type}: TPlan) {

        this.plan = {
            name,
            price,
            type
        }
    }

    getPlan() {
        return this.plan
    }
}

 export default PlanContext;


