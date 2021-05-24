/*
return myThing
    .doSomething()
    .then(...)
    .then(...);
    */
   /*
   function getCPU(){
    let cpu = console.log('Yours model processor(s) is'+'=>'+os.cpus().map(cpu=>cpu.model)),
    speed = console.log('Yours  processor(s) sped is'+'=>'+os.cpus().map(cpu=>cpu.speed)); 
    return {
        func1: cpu, 
        func2: speed
    };  
}
*/
const getCpu =()=>{os.cpus().map(cpu=>cpu.model)};
const getSpeed=()=>{os.cpus().map(cpu=>cpu.speed)};
module.exports ={
    func1:getCPU(),
    func2:getSpeed()
   
}
console.log('TestModule connected!');

