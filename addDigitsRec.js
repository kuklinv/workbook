// ��������� ��������������� �����. ����������� ����� ���� �������� � ����
// ���� ���� �� ���������� ����
function sumOfDigits(number) {    
    return number.toString().split('').reduce(function(a,b){return +a + +b}, 0);
};
