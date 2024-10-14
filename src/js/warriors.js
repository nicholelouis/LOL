export default class Warrior {
    constructor(data) {
        this.name = data.name;                          
        this.id = data.id;                              
        //this.img = `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${data.image.full}`;
        this.img = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.id}_0.jpg`;
        this.intro = data.blurb;
        this.title = data.title;
        this.attack = data.info.attack;
        this.defense = data.info.defense;
        this.magic = data.info.magic;
        this.difficulty = data.info.difficulty;
        this.partype = data.tags.join(', ');
        this.key = data.key;
    }
}
