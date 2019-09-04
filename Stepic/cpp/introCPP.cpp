////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////
//////////////////////////////////////////////Курс Введение в С++ на Stepik

#include <iostream>
using namespace std;
int main() {
  // put your code here
  int one, two;
  cin >> one >> two;
    if ( one > two) {
        cout << one;
    } else {
        if (one == two) {
        cout << one;
        } else {
        cout << two;
        }
    }   
  return 0;
}
////////////////////////////////////////
#include <iostream>
using namespace std;
int main() {
  // put your code here
  int one, two;
  cin >> one >> two;
    if (one > two) {
      cout << 1;
    } else { if (one == two) {
             cout << 0;
             } else {
               cout << 2;
               }
            
      } 
  return 0;
}
///////////////////////////////////////
#include <iostream>
using namespace std;
int main() {
  // put your code here
int a, b, c;
    cin >> a >> b >> c;
    if (a > b) 
        b = a;
    if (b > c)
        c = b;
    cout << c;
  return 0;
}
//////////////////////////////////////
#include <iostream>
using namespace std;
int main() {
  // put your code here
    int a, b, c;
    cin >> a >> b >> c;
    if (a+b > c && a+c > b && b+c > a)
        cout << "YES";
    else
        cout << "NO";
    return 0;
}
//////////////////////////////////////
#include <iostream>
using namespace std;
int main() {
  // put your code here
    int a, b, c;
    cin >> a >> b >> c;
    if (a == b && c == b) {
    cout << "3";
    } else {if (a == b && b !=c || a == c && c != b || b == c && c != a) {
        cout << "2";
           } else {
               cout << "0";
           }
    } 
  return 0;
}
//////////////////////////////////////
#include <iostream>
using namespace std;
int main() {
  int a, b, c;
cin>>a>>b>>c;
if (a>b) swap (a, b);
if (a>c) swap (a, c);
if (b>c) swap (b, c);
cout<<a<<" "<<b<<" "<<c; 
  return 0;
}
////////////////////////////////////
#include <iostream>
using namespace std;
int main() {
  int a1,b1,c1,a2,b2,c2; 
cin>>a1>>b1>>c1>>a2>>b2>>c2; 
if(a1 > b1) 
swap(a1,b1); 
if(a1 > c1) 
swap(a1,c1); 
if(b1 > c1) 
swap(b1,c1); 
if(a2 > b2) 
swap(a2,b2); 
if(a2 > c2) 
swap(a2,c2); 
if(b2 > c2) 
swap(b2,c2); 
if(a1==a2 && b1==b2 && c1==c2) 
cout<<"Boxes are equal"; 
else 
if(a1<=a2 && b1<=b2 && c1<=c2) 
cout<<"The first box is smaller than the second one"; 
else 
if(a1>=a2 && b1>=b2 && c1>=c2) 
cout<<"The first box is larger than the second one"; 
else 
cout<<"Boxes are incomparable"; 
  return 0;
} 
////////////////////////////////////////
#include <iostream>
#include <cmath>
using namespace std;
int main() {
    int N, num = 1;
    cin >> N;
    while (num <= N) {
      if (pow(num, 2) <= N) {  
        cout << pow(num, 2) << " ";
      } else break;
        num += 1;
    }
  return 0;
}
///////////////////////////////////////
#include <iostream>
using namespace std;
int main() 
{
    int n, i = 2; 
    cin >> n; 
    while (n % i != 0)
    { 
        i++;
    }
    cout << i;
    return 0;
}
////////////////////////////////
#include <iostream>
using namespace std;
int main()
{
  int N, i = 2;
  cin >> N;
  cout << 1 << " ";
  while(i <= N) {
    if (i % 2 == 0)
    {
      cout << i << " ";
    }
    i = i * 2;
  }
  return 0;
} 
////////////////////////////
#include <iostream>
using namespace std;
int main() {
int i, n;
cin >> n;
i = 1;
while (i < n) {
    
    i = i * 2;
} 

    
    if (i == n) {
        cout << "YES";
    }
    else {
        cout << "NO";
    }
  return 0;
}
///////////////////////////////////////////// это интересно! ввод с клавиатуры последовательности  чисел
// через энтер. пока не встретиться ноль. тогда возврат количества введенных чисел
// энтер может быть любым числом не равным нулю
#include <iostream>
using namespace std;
int main() {
  int enter=-1,i=0;
  while (enter!= 0) {
    cin >> enter;
        if(enter!=0){
    i = i+1;}
  }
  cout << i;
  return 0;
}
//// то же только сумма введенных чисел
#include <iostream>
using namespace std;
int main() {
  int enter=-1,i=0;
  while (enter!= 0) {
    cin >> enter;
        if(enter!=0){
    i = i+enter;}
  }
  cout << i;
  return 0;
}
///// то же только ищем максимальный элемент последовательности
#include <iostream>
using namespace std;
int main() {
  int enter=-1,max=0;
  while (enter!= 0) {
    cin >> enter;
        if(enter!=0){
          if (enter > max) {
            max = enter;
          }
    }
  }
  cout << max;
  return 0;
}
/////////////////то же только выводим второй по величине элемент
#include <iostream>
using namespace std;
int main() {
  int enter=-1,max, newmax = 1, counter = 0;
  while (enter!= 0) {
    cin >> enter;
    max = enter;
        if(enter!=0){
          if (enter >= max) {
            newmax = enter;
            max = enter;
          }
          if (max > newmax)
          {
            newmax = max;
          }
    }
  }
  cout << newmax;
  return 0;
}
/////////////////////////////////////////////////////// расчет N-го числа Фибоначчи
#include <iostream>
using namespace std;
int main() {
  int N, x = 1, y = 1,  ans = 0, i = 2;
  cin >> N;
    if (N == 0) {
  ans = 0;
  }
  if (N == 1 || N == 2) {
  ans = 1;
  }
  while(i < N) {
    ans = x + y;
    x = y;
    y = ans;
    i += 1;
  }
  cout << ans;
  return 0;
}
// альтернатива на JS через рекурсию:
function fibonacchi(n){
  if ( n == 0 ) return 0;
 
  if (n == 1 || n == 2) return 1;
  return fibonacchi(n-2) + fibonacchi(n-1);
}
console.log(fibonacchi(10));
////////////////////////////////////////////////////// проверка равенству числа из ряда Фибоначи
#include <iostream>
using namespace std;
int main()
{
  int A, x = 1, y = 1, i = 2;
  cin >> A;
  
  while(i < N) {
    ans = x + y;
    x = y;
    y = ans;
    i += 1;
  }
  cout << ans;
  return 0;
//////////////////////////////////////////////////// анализ последовательностей чисел
#include <iostream>
using namespace std;
int main() {
  int N = 555;
  cin >> N; 
  int prev = N, count = 0, max_count = 0;
  while (N != 0){
    if (N == prev){ count++; }
    else { count = 1; prev = N; } 
    if (count > max_count){ max_count = count; } 
    cin >> N; 
  }
  cout << max_count; 
  return 0;
}
/////////////////////////////////////////////////////дествительные числа
//                                                   !! PI = atan(1) * 4;


//////////////////////////выводим дробную часть числа с точностью до 3-х знаков
#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;
int main() {
    double X, ans;
    cin >> X;
    ans = X - trunc(X);
    cout << setprecision(3) << fixed;
    cout << ans;
  // put your code here
  return 0;
}
////////////////////////// выводим первую цифру после запятой в целом виде
#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;
int main() {
    double X, ans;
    cin >> X;
    ans = floor (10 * (X - trunc(X))); //// по условиям задачи в меньшую сторону
    cout << ans;
  // put your code here
  return 0;
}
//////////////////////////
#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;
int main(int argc, char const *argv[])
{
  double A, B, C, p, s;
  cin >> A >> B >> C;
    p = (A + B + C) / 2;
    s = sqrt (p * (p - A) * (p - B) * (p - C));
    cout << s;
  /* code */
  return 0;
}
//////////////////////////// сумма вклада
#include <iostream>
#include <cmath>
using namespace std;
int main() {
    int P, X, Y, b, C;
    double a;
    cin >> P >> X >> Y;
    C=(100*X+Y)*(P+100)/100;// Считаем сумму вклада за год в копейках
    b=C%100;
    a=trunc(C/100);
    cout << a << " " << b;
  return 0;
}
//////////////////////////////////////////////////Циклы и последовательности

///////////////////////////////////////////////////!!! Сортировка методом минимума!!!!!!!!!/////////////////////////////
#include <iostream>
#include <vector>
using namespace std;
int main () {
int n;
cin >> n;
vector <int> a; // определение одномерного массива - пустого (нет)
//считывание
for (int i = 0; i < n; i++) {
    int temp;
    cin >> temp;
    a.push_back(temp);   // складываем в конец массива
}
//обработка
for (int j = 0; j < n; j++) { //j – начиная с какого номера ищем наименьший
    int num_min = j; //номер минимального элемента
    for (int i = j; i < n; i++) { //ищем только в еще не упорядоченной части
        if (a[i] < a[num_min]) {
            num_min = i;
        }
    }
    //обмен значений элементов a[j] и a[num_min]
    int temp;
    temp = a[j];
    a[j] = a[num_min];
    a[num_min] = temp;
}
//вывод
for (auto now : a) {
    cout << now << " ";
}
return 0;
}
//////////////////////////////////////// вывод элементов с четным индексом
#include <iostream>
#include <vector>
using namespace std;
int main(int argc, char const *argv[])
{
  int n;
  cin >> n;
  vector <int> mass(n);
  for(int i = 0; i < n; i++) /// reading array
  {
    cin >> mass[i];
  }
  for(int j = 0; j < n; )
  {
   cout << mass[j] << " ";
   j = j + 2; 
  }
  return 0;
}
//////////////////////////////////// вывод четных элементов
#include <iostream>
#include <vector>
using namespace std;
int main(int argc, char const *argv[])
{
  int n;
  cin >> n;
  vector <int> mass(n);
  for(int i = 0; i < n; i++) /// reading array
  {
    cin >> mass[i];
  }
  for(int j = 0; j < n; j++)
  {
   if (mass[j] % 2 == 0]) {
   cout << mass[j] << " ";
   }
  }
  return 0;
}
//////////////////////////////////  вывод положительных элементов
#include <iostream>
#include <vector>
using namespace std;
int main(int argc, char const *argv[])
{
  int n, counter;
  cin >> n;
  vector <int> mass(n);
  for(int i = 0; i < n; i++) /// reading array
  {
    cin >> mass[i];
  }
  for(int j = 0; j < n; j++)
  {
   if (mass[j] > 0) {
   counter ++;
   }
  }
  cout << counter;
  return 0;
}
//////////////////////////////////// ищем минимальный из положительных элементов аррэя... 
#include <iostream>
using namespace std;
int main() {
  int n, max=0, min;
    cin>>n;
    int arr[n];
    for (int i=0; i<n; i++) {
        cin>>arr[i];
    } for (int i=0; i<n; i++) {
        if (arr[i]>max) {
            max=arr[i];;
        } 
    } min=max;
        for (int i=0; i<n; i++) {
        if (arr[i]<=min && arr[i]>0) {
            min=arr[i];
        } 
    } 
      cout<<min;
  return 0;
}
/////////////////////////////////////////////////////
#include <iostream>

using namespace std;

int main() {
  int n, g = 1, max;
  cin >> n;
  int *arr = new int[n];;
  for (int i = 0; i < n; i++)
  {
    cin >> arr[i];
  }
  max = arr[0];
  for (int i = 0; i < n; i++)
  {
    if (max != arr[i])
    {
      max = arr[i];
      g++;
    }
  }
  cout << g;
  return 0;
}
///////////////////////////////////////////////////// !!! Двумерные массивы int a[i][j]//////////////////////////////
//////// общий случай создания массива (болванка)

#include <iostream>
int main(int argc, char const *argv[])
{
  int array [n][m];
  // заполнение массива
  for(int i = 0; i < n; i++)
  {
    for(int j = 0; j < m; j++)
    {
      sin >> array[i][j];
    }
  }
  //вывод
  for(int i = 0; i < n; i++)
  {
    for(int j = 0; j < m; j++)
    {
      cout << array[i][j] << ' ';
    }
  cout << endl;
  }
  return 0;
}
///////////////////////////////////
/*
Sample Input:

3 4
0 3 2 4
2 3 5 5
5 1 2 3
Sample Output:

1 2
*/
#include <iostream>
using namespace std;
int main(int argc, char const *argv[])
{
  int array [100][100];
  int n, m, maxEln = 0, maxElm = 0;
  cin >> n >> m;
  // заполнение
  for(int i = 0; i < n; i++)
  {
    for(int j = 0; j < m; j++)
    {
      cin >> array[i][j];
    }
  }
  // обработка
  int maxEl = array[0][0];
  for(int i = 0; i < n; i++)
  {
    for(int j = 0; j < m; j++)
    {
      if (array[i][j] > maxEl) {
        maxEl = array[i][j];
        maxEln = i;
        maxElm = j;
      } 
    }
  }
  cout << maxEln << ' ' << maxElm;
  return 0;
}

/////////////////////////////////
/*
Sample Input:
5
Sample Output:
* . * . *
. * * * .
* * * * *
. * * * .
* . * . *
*/
#include <iostream>
#include <cmath>
using namespace std;
int main(int argc, char const *argv[])
{
  char array [15][15];
  int n;
  cin >> n;
  for(int i = 0; i < n; i++) /// заполнение
  {
    for(int j = 0; j < n; j++)
    {
      array[i][j] = '.';
    }
  }
  // обработка
  int half = ceil(n/2);  /// половинка (строка, столбец)
  for(int j = 0; j < n; j++)  // средняя строка
  {
    array[half][j] = '*';
  }
  for(int i = 0; i < n; i++) // средний столбец
  {
    array[i][half] = '*';
  }
  for(int i = 0; i < n; i++) // главн.диагональ
  {
    for (int j = 0; j < n; j++)
    {
    if (i == j) {array[i][j] = '*';}
    }
  }
  for(int i = 0; i < n; i++) // вторая.диагональ???????????????????
  {
    for (int j = n; j >= 0; j--)
    {
    if (i == n-1-j) {array[i][j] = '*';}
    }
  }
// вывод
for(int i = 0; i < n; i++) 
  {
    for(int j = 0; j < n; j++)
    {
      cout << array[i][j] << ' ';
    }
    cout << endl;
  }
  return 0;
}
///////////////////////////////// проверка симметричности массива относительно главной диагонали
#include <iostream>

using namespace std;

int main() {
  int num, N, arr[10][10], g=0;
  cin >> N;
  // Записываем
  for (int i = 0; i < N; i++)
  {
      for (int j = 0; j < N; j++)
      {
          cin >> arr[i][j];
      }
  }
  // Проверяем
  for (int i = 0; i < N; i++)
  {
      for (int j = 0; j < N; j++)
      {
          if (arr[i][j] != arr[j][i]) g++;
      }
  }
  if (g > 0) cout << "NO";
  else cout << "YES";
  return 0;
}
//////////////////////////////////////// транспонирование массива относительно главной диагонали
#include <iostream>

using namespace std;

int main() {
  int N, M, arr[1000][1000], temp[1000][1000];
  cin >> N >> M;
  
  for (int i = 0; i < N; i++)
  {
      for (int j = 0; j < M; j++)
      {
          cin >> arr[i][j];
      }
  }
  
  for (int j = 0; j < M; j++)
  {
      for (int i = 0; i < N; i++)
      {
          cout << arr[i][j] << " ";
      }
      cout << endl;
  }
  return 0;
}
/////////////////////////////////////// интересная ///////////////////////////////////////////////////////
/*
В кинотеатре n рядов по m мест в каждом (n и m не превосходят
В двумерном массиве хранится информация о проданных билетах, число 1 означает, что билет на данное место уже продан, число 0 означает,
 что место свободно. Поступил запрос на продажу k билетов на соседние места в одном ряду. Определите, можно ли выполнить такой запрос.

Формат входных данных
Программа получает на вход числа n и m. Далее идет n строк, содержащих m чисел (0 или 1), разделенных пробелами. Затем дано число k.
Формат выходных данных
Программа должна вывести номер ряда, в котором есть k подряд идущих свободных мест. Если таких рядов несколько, 
то выведите номер наименьшего подходящего ряда. Если подходящего ряда нет, выведите число 0.
*/
#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

int main() {
  int a[20][20];
  int n, m, k, z = 1, temp = 0;
  cin >> n >> m;
  for (int i = 0; i < n; i++)
    {
    for (int j = 0; j < m; j++)
        {
      cin >> a[i][j];
    }
  }
  cin >> k;
  for (int i = n - 1; i >= 0; i--)
    {
    for (int j = 1; j < m; j++)
        {
      if (a[i][j] == a[i][j - 1] && a[i][j] == 0)
            {
        z++;
      }
      else
            {
                z = 1;
            }
      if (z >= k)
            {
        temp = i + 1;
            }
    }
    z = 1;
  }
  cout << temp;
  
  return 0;
}
//////////////////////////////////// поворот массива по часовой стрелке
#include <iostream>

using namespace std;

int main() {
  int N, M, arr[1000][1000], temp[1000][1000];
  cin >> N >> M;
  
  for (int i = 0; i < N; i++)
  {
      for (int j = 0; j < M; j++)
      {
          cin >> arr[i][j];
      }
  }
  
  for (int i = 0; i < N; i++)
  {
      for (int j = 0; j < M; j++)
      {
          temp[j][N-1-i] = arr[i][j];
      }
  } 
    
  for (int i = 0; i < M; i++)
  {
      for (int j = 0; j < N; j++)
      {
          cout << temp[i][j] << " ";
      }
      cout << endl;
  }
  return 0;
}
/////////////////////////////////// заполнение шахматной доски
/*
Даны числа n и m. Заполните массив размером n × m в шахматном порядке: клетки одного цвета заполнены нулями, 
а другого цвета - заполнены числами натурального ряда сверху вниз, слева направо. В левом верхнем углу записано число 1.
*/

#include <iostream>

using namespace std;

int main() {
  int N, M, arr[1000][1000], c = 0;
  cin >> N >> M;
  
  for (int i = 0; i < N; i++)
  {
      for (int j = 0; j < M; j++)
      {
          arr[i][j] = 0;
      }
  }
  
  for (int i = 0; i < N; i++)
  {
      for (int j = 0; j < M; j++)
      {
          if (i % 2 == 0 && j % 2 == 0)
          {
              c++;
              arr[i][j] = c;
          }
          
          else if (i % 2 == 1 && j % 2 == 1)
          {
              c++;
              arr[i][j] = c;
          }
      }
  } 
    
  for (int i = 0; i < N; i++)
  {
      for (int j = 0; j < M; j++)
      {
          cout.width(4);
          cout << arr[i][j];
      }
      cout << endl;
  }
  return 0;
}
/////////////////////////////////////////////////////ФУНКЦИИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
#include <iostream>
using namespace std;
int min (int a, int b) {
  if (a < b) {
    return a;
  } else return b;  
}
int min4(int a, int b, int c, int d) {
  int firstPair = min(a, b);
  int secPair = min (c, d);
  if (firstPair < secPair) {
    return min(a, b);
  } else return min (c, d);
}
/*
min(a, b) < min(c, d) ? min(a, b) : min(c, d); 
*/
int main(int argc, char const *argv[])
{
  int a, b, c, d;
  cin >> a >> b >> c >> d;
  cout << min4(a, b, c, d); 
  return 0;
}
///////////////////////////////// расстояние меcжду точками
#include <iostream>
#include <cmath>
using namespace std;
double distance(double x1, double y1, double x2, double y2) {
  double AB = x2 - x1;
  double BC = y2 -y1;
  double D = sqrt(AB*AB + BC*BC);
  return D;
}

int main()
{
  double x1, y1, x2, y2;
  cin >> x1 >> y1 >> x2 >> y2;
  cout << distance (x1, y1, x2, y2);
  return 0;
}
///////////////////////////////принадлежность координатам
#include <iostream>
using namespace std;

double IsPointInSquare(double x, double y)
{
    return (x >= -1 && x <= 1 && y <= 1 && y >= -1); 
}
int main() 
{
  double x, y;
  cin >> x >> y;
  IsPointInSquare(x, y); 
  if (IsPointInSquare(x, y))
  {
      cout << "YES";
  }
    
  else
  {
      cout << "NO";
  }
  return 0;
}
/////////////////////////////////////// то же только ромб
#include <iostream>
#include <cmath>
using namespace std;

double IsPointInSquare(double x, double y)
{
    return ((abs(x) + abs(y)) <= 1); 
}
int main() 
{
  double x, y;
  cin >> x >> y;
  IsPointInSquare(x, y); 
  if (IsPointInSquare(x, y))
  {
      cout << "YES";
  }
    
  else
  {
      cout << "NO";
  }
  return 0;
}
//////////////////////////////////////// принадлежность окружности
#include <iostream>
#include <cmath>
#include <math.h> // Подключаем для использования abs
using namespace std;
double IsPointInCircle(double x, double y, double xc, double yc, double r) {
  double a, b, c;
  a = xc - x;
  b = yc - y;
  c = sqrt(pow(a, 2) + pow(b, 2));
  return (abs(c) <= r);
}

int main() {
  double x, y, xc, yc, r;
  cin >> x >> y >> xc >> yc >> r;
  if (IsPointInCircle(x, y, xc, yc, r)) {
    cout << "YES";
  }
  else {
    cout << "NO";
  }
  return 0;
}
//////////////////////////// рекурсия
////////////////////// #1..... предусмотрен случай когда степень на вводе отрицательная
#include <iostream>
using namespace std;
double power(double a, int n){
    if (n == 0) {
        return 1;
    }
    if (n > 0){
        return a * power(a, n-1);
    }
    else return 1/a * power(a, n+1);
}
int main() {
    double a, n;
    cin >> a >> n;
    cout << power (a, n);
    return 0;
}
////////////////////////////minDivisor  
#include <iostream>
#include <cmath>
using namespace std;

int MinDivisor(int n,int d=2){
  if (d <= sqrt(n)){
  if (n%d == 0){ return d; }
  else MinDivisor(n, d + 1);
  }
    else return n;
}
int main(){
  int n;
  cin >> n;
  cout << MinDivisor(n);
  return 0;
}
////////////////////////////////////is Prime
#include <iostream>
#include <cmath>
using namespace std;
  int iter (int counter, int num) // не проходит 55 тест за счет отсутствия ограничения подбора sqrt(n)
  {
    if (counter == num)
    {
      return true;
    }
    if (num % counter == 0)
    {
      return false;
    }
    return iter (counter + 1, num);
  }

int main()
{
  int n;
  cin >> n;
  if (n <= 1)
  {
    cout << "NO";
  } else iter(2, n) ? cout << "YES" : cout << "NO";
  return 0;
}
//................................................ альтернативный вариант isPrime буз рекурсии.
#include <iostream>
#include <cmath>
using namespace std;
bool isPrime(int n) {
    for (int i=2; i <= sqrt(n); i++)
    {
        if (n % i == 0) return false;
    }
    return true;
}
int main()
{
  int n;
  cin >> n;
  if (isPrime(n)) cout << "YES"; 
  else cout << "NO";
}
// мой вариант не проходит тест на ограничение подбора sqrt(n)/ попробовать реализовать.
///////////////////////////// возведение в степень рекурсия
#include <iostream>
#include <cmath>
using namespace std;

double evenPower (double a, int n) 
{
  // an = (a2)n/2 
  int power = n/2;
  double an = a*a;
  if (power == 1) {
    return an;
  } else return an * evenPower (a, n - 1);  
}
double oddPower (double a, int n) 
{
  // an = a × an−1
  int power = n - 1;
  if (power == 1) {
    return a * a;
  } else return a * (a * oddPower(a, n));  
}

int main()
{
  double a;
  int n;
  cin >> a >> n;
  if (n % 2 == 0) {  
    cout << evenPower (a, n);
  } else
  {
    cout << oddPower(a, n);
  }
  return 0;
}
//................................. другой вариант. намного проще
#include <iostream>
using namespace std;
double power(double a, int n)
{
    if (n == 0) return 1;
    else if (n % 2 == 0) return power(a * a, n / 2); 
    else return a * power(a, n - 1);
}

int main() {
  double a;
  int n;
  cin >> a >> n;
  cout << power(a, n);
  return 0;
}
///////////////////////////////// сумма последовательности чисел без цикла. рекурсия
#include <iostream>
using namespace std;

int summ (int enter, int counter) 
{
  if (enter == 0) {
    return counter;
  } else {
    cin >> enter;
    return summ (enter, counter + enter);
  }
}

int main() {
  int enter=-1,counter = 0;
  cout << summ (enter, counter);
  return 0;
}
////////////////////////////////////////////// n - число фибоначчи рекурсия
#include <iostream>
using namespace std;

int fib (int n, int ans, int x, int y)
{
  if (n == 1 || n == 2) {
    return ans;
  } else
  {
    ans = x + y;
    x = y;
    y = ans;
    return fib(n - 1, ans, x, y); 
  }  
}

int main()
{
  int n, ans = 1, x = 1, y = 1;;
  cin >> n;
  cout << fib(n, ans, x, y);
  return 0;
}
////////////////////////////////////////////////странная задача про небоскреб и сброс шаров
// верное без рекурсии
#include <iostream>
using namespace std;
int throwfunc (int n){
    int i=0;
    while (n>-i+1){
        i++;
        n=n-i;   
    }
    return i-1;
}
int main() {
    int n,i=0;
    cin >> n;
    cout << throwfunc (n);
  return 0;
}
///////////////////////////////////////////
///////////////////////////////////////////////////////////////строки и символы ///////////////////////////////////////////////////////
#include <iostream>
#include <string>
using namespace std;

int main(int argc, char const *argv[])
{
  char c;
  cin >> c;
  if (c >= '0' && c <= '9') {
    cout << "yes";
  } else cout << "no";
  return 0;
}
///////////////////////////смена регистра в одну сторону (вверх)
#include <iostream>
using namespace std;
int main()
{
    char l;
    cin>>l;
  if(l >= 'a' && l <= 'z')
  {
      l = toupper(l);//делает из маленькой буквы большую
      cout<<l;
  }
    else
    {
        cout<<l;
    }
  return 0;
}
//////////////////////// смена регистра в обе стороны
#include <iostream>

using namespace std;
int main() {
  char c;
  cin>>c;
  if(c>='a'&&c<='z'){c=c-32;
  cout<<c;}
  else if (c>='A'&&c<='Z'){c=c+32;
  cout<<c;}
  else cout <<c;
  return 0;
}
//////////////////////////////////////// проверка на полиндром
#include <iostream>
#include <string>
using namespace std;

bool isPolindrome (string str, int start, int fin)
{
if (fin < 2) {
return true;
}
if (str[start] != str[fin-1]) {
return false;
} else {
start += 1;
fin -=2;
return isPolindrome(str, start + 1, fin - 2);
}
}

int main(int argc, char const *argv[])
{
string str;
getline(cin, str);
int start = 0;
int fin = str.size();
isPolindrome (str, start, fin) ? cout << "yes" : cout << "no";
return 0;
}
// валит  тест 11 "aabaaaa" -> "no".
/// афигеть...... работающий код..... без наворотов и рекурсии:
#include <iostream>
#include <string>
using namespace std;
int main() {
  string a;
    string text = "yes";
    getline(cin, a);
    for(int i=0; i<a.length()/2; i++)
    {
        if(a[i] != a[a.length()-1-i]) text = "no";
    }
    cout << text;
  return 0;
}
/////// причем реально красиво и коротко. минимальное количество описания и условий........
////////////////////////////
///////////////////////////////////находит самое длинное слово в строке
#include <iostream>
#include <string>
using namespace std;
int main()
{
  string s,s_max = "";
   while(cin >> s) {
      if (s.size() > s_max.size()) s_max = s;
   }
    cout << s_max << endl; // put your code here return 0; } 
}
/////////////////////// проверка правильности написания IP- адреса (формат)
#include <iostream>
#include <string>
using namespace std;
int d(string s)
{
  int c1 = 0, c = 0;
  for(auto ch : s)
  {
  if(ch>='0' && ch <='9') c1++;
  }
  if(c1 == s.length() && c1 > 0)
      if(stoi(s)>=0 && stoi(s)<=255) c = 1;
  return c;
}
int main() 
{
    string s, s_temp;
    getline(cin, s);
    s += ".";
    int c = 0;    
    for(auto ch : s)
    {
      if(ch == '.') c++;
        if(ch != '.') 
      {
        s_temp += ch;
      }
      else
      {
    
    c += d(s_temp);
    s_temp="";
      }
    }
    c--;
    if(c == 7) 
    {
      cout << "YES";
    }
    else
    {
      cout << "NO";
    }
  return 0;
}
//////////////////////////////////////////



















