

class addonState  { 
    private addon:Array<{title: string, price:number}> = []

    static instance = new addonState()

    static getInstance(){return this.instance}

    setAddon(addon:string, price:number):void{this.addon.push({title:addon, price:price})}

    getAddon():Array<{title:string, price:number}>{return this.addon}
    
    removeAddon(item:{title:string}){ 
      const index = this.addon.findIndex(addon => addon.title === item.title)
      this.addon.splice(index, 1);
    }

    cleanArray(){this.addon = []}

    checkAddon(addon:{title:string}):boolean{ 
      let activeCheckBox:boolean;
      const index = this.addon.findIndex(item => item.title === addon.title)

      index === -1 ? activeCheckBox = false : activeCheckBox = true 
       
      return activeCheckBox
    }
}

export default addonState