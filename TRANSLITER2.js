function send1(){
var text = document.getElementById('text').value;
var trans2 = new Array();
    trans2['A']='А';     trans2['a']='а';
    trans2['B']='Б';     trans2['b']='б';
    trans2['V']='В';     trans2['v']='в';
    trans2['G']='Г';     trans2['g']='г';
    trans2['D']='Д';     trans2['d']='д';
    trans2['E']='Е';     trans2['e']='е';
    trans2['Yo']='Ё';    trans2['yo']='ё';
    trans2['Zh']='Ж';    trans2['zh']='ж';
    trans2['Z']='З';     trans2['z']='з';
    trans2['I']='И';     trans2['i']='и';
    trans2['J']='Й';     trans2['j']='й';
    trans2['K']='К';     trans2['k']='к';
    trans2['L']='Л';     trans2['l']='л';
    trans2['M']='М';     trans2['m']='м';
    trans2['N']='Н';     trans2['n']='н';
    trans2['O']='О';     trans2['o']='о';
    trans2['P']='П';     trans2['p']='п';
    trans2['R']='Р';     trans2['r']='р';
    trans2['S']='С';     trans2['s']='с';
    trans2['T']='Т';     trans2['t']='т';
    trans2['U']='У';     trans2['u']='у';
    trans2['F']='Ф';     trans2['f']='ф';
    trans2['X']='Х';     trans2['x']='х';
    trans2['C']='Ц';     trans2['c']='ц';
    trans2['Ch']='Ч';    trans2['ch']='ч';
    trans2['Sh']='Ш';    trans2['sh']='ш';
    trans2['Shh']='Щ';    trans2['shh']='щ';
    trans2['"']='Ъ';     trans2['"']='ъ';
    trans2['Y\'']='Ы';    trans2['y\'']='ы';
    trans2['\'']='Ь';    trans2['\'']='ь';
    trans2['E\'']='Э';    trans2['e\'']='э';
    trans2['Yu']='Ю';    trans2['yu']='ю';
    trans2['Ya']='Я';    trans2['ya']='я';

    var result = '';
    for(i=0;i<text.length;i++) {
        if(trans2[text[i]] != undefined) { result += trans2[text[i]]; }
        else { result += text[i]; }
    }
    document.getElementById('text').value = result;
}
