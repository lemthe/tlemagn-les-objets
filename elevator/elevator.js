let elevator = {
    floor : 0,
    resetFloor: function(){  
          this.floor=0;
        },
    up: function(){
        this.floor+=1;
    },
    down: function(){
        this.floor-=1;
    },
    printFloor: function(){
        console.log(this.floor);
    }

};

elevator.up();
elevator.up();
elevator.down();
elevator.printFloor();

module.exports=elevator;