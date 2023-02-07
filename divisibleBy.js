function divisibleBy(n = 10){
    for (let i = 1; i < n+1; i++) {
        let flag3 = false;
        let flag5 = false;

        if ((i % 3) == 0) {
            flag3 = true;
        }
        if ((i % 5) == 0) {
            flag5 = true;
        }

        let finalPrint = "error";

        if (flag3) {
            finalPrint = `${i} by 3`;
        }
        if (flag5) {
            finalPrint = `${i} by 5`;
        }
        if (flag3 && flag5) {
            finalPrint = `${i} by both`;
        }
        if (!flag3 && !flag5) {
            finalPrint = i;
        }
        console.log(finalPrint);
    }
}

divisibleBy(30);