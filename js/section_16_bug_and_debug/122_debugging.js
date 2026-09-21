/**
 * *** BUG
 * A bug is a term used in programming to describe an error,
 * defect, or unwanted behavior in software.
 *
 * It occurs when the program's code does not behave as expected
 * and produces incorrect, unexpected, or inconsistent results.
 *
 * *** DEBUG
 * Debugging is the process of identifying, analyzing, and fixing bugs
 * in a computer program. It involves troubleshooting to understand
 * and resolve unwanted software behavior.
 *
 * The goal of debugging is to find the root cause of the bug and fix it
 * to ensure that the program runs correctly.
**/

const bugNum  = () => {
    // debugger or you can click the line to insert a breakpoint
    const number = "123"

    if(number === 123)
        return "Sucess"

    throw new Error("Deu ruim")
}

try {
    bugNum()
} catch (e) {
    console.log("Erro:", e.message)
}

