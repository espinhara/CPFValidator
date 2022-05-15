export default class Utils {
    public static cpfIsValid(strCPF:string):boolean {
        if (!strCPF) {
            return false;
        }
        strCPF = strCPF.replace(/[^\d,]/g,'')
        var Sum;
        var Rest;
        var i;

        Sum = 0;
        if (strCPF === "00000000000") return false;

        for (i = 1; i <= 9; i++) Sum = Sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Rest = (Sum * 10) % 11;

        if ((Rest === 10) || (Rest === 11)) Rest = 0;
        if (Rest !== parseInt(strCPF.substring(9, 10))) return false;

        Sum = 0;
        for (i = 1; i <= 10; i++) Sum = Sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Rest = (Sum * 10) % 11;

        if ((Rest === 10) || (Rest === 11)) Rest = 0;
        if (Rest !== parseInt(strCPF.substring(10, 11))) return false;
        return true;
    }
}