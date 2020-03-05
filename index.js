const println = (msg, ...args) => console.log(msg, ...args)

println("--- Pi Estimate Demo in NodeJS (5 March 2020/Thr) ---")

const estimate = (times) => {
  let a = 0
  for (let i=0;i < times;i++) {
    let x = Math.random()
    let y = Math.random()
    let d = Math.sqrt(x**2 + y**2)

    if (d <= 1) a++
  }

  return 4.0*a/times
}

let pi = estimate(10000)
println("Estimated pi-> ", pi)

