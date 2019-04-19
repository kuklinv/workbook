// заготовка логики для шахмат. возможно потом реализовать на другом языке
// реализованы только  - проверка правильности ходов (кроме пешки)
// нет реализации - взять чужую фигуру

// проверяет существует ли такой ход ладьи.
#include <iostream>
using namespace std;
int main() {
  int a,b,c,d;
  cin >> a >> b >> c >> d;
  if (a == c && b != d || a != c && b == d) {     
    cout << "YES";
  } else {
    cout << "NO";
  }
  return 0;
}
// проверка существования такого хода королем (на одну клетку в любом направлении)
#include <iostream>
using namespace std;
int main () {
  int a, b, c, d;
  cin >> a >> b >> c >> d;
    if ((c == (a + 1) || c == (a - 1) || c == a  ) && (d == (b + 1) || d == (b -1) || d == b)) {  
    cout << "YES";
  } else
  {
    cout << "NO";
  }
  return 0;  
}
// проверка слона
#include <iostream>
using namespace std;
int main () {
  int a, b, c, d;
  cin >> a >> b >> c >> d;
    if (abs(a-c) == abs(b-d)) {  
    cout << "YES";
  } else
  {
    cout << "NO";
  }
  return 0;
}
// проверка ферзь/ по сути это ладья + (или) слон
#include <iostream>
using namespace std;
int main () {
  int a, b, c, d;
  cin >> a >> b >> c >> d;
if (abs(a-c) == abs(b-d) || (a == c || b == d)) {
  cout << "YES";
} else
{
  cout << "NO";
}
  return 0;
}
// проверка конь
#include <iostream>
using namespace std;
int main () {
  int a, b, c, d;
  cin >> a >> b >> c >> d;
  int x = c - a;
  int y = d - b;
  if (x < 0) { x = x * -1; }
  if (y < 0) { y = y * -1; }
  if (x == 2 && y == 1 || x == 1 && y == 2)
  {
    cout << "YES";
  } 
  else 
  {
    cout << "NO";
  }
  return 0;
}
// проверка пешки. проверка именно хода - укороченный король (без хода назад, в сторону и по диагонали). реализации возможности взять чужую фигуру, нужна
// проверка что клетка занята чужой фигурой (как и для реализации взятия любой другой фигурой - это вынести в отдельную функцию)
#include <iostream>
using namespace std;
int main () {
  int a, b, c, d;
  cin >> a >> b >> c >> d;
    if (a == c && d == (b+1) && (b+d) <= 8 || a == c && d == (b+2) && (b+d) <= 8) {  
    cout << "YES";
  } else
  {
    cout << "NO";
  }
  return 0;  
}