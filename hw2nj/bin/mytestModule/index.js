/*
return myThing
    .doSomething()
    .then(...)
    .then(...);
    */
   function getCPU(){
    let cpu = console.log('Yours model processor(s) is'+'=>'+os.cpus().map(cpu=>cpu.model)),
    speed = console.log('Yours  processor(s) sped is'+'=>'+os.cpus().map(cpu=>cpu.speed)); 
    return {
        func1: cpu, 
        func2: speed
    };  
}
module.exports ={
    func:getCPU(),
   
}
console.log('TestModule connected!');

