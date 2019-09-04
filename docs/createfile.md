## Yeni typescript faylının yaradılması

Yeni typescript sənədi yatratmaq üçün **Visual studio code** editorumuzu acıb sol tərəfdəki pəncərə üzərində sağ düymə ilə **New file** ya da <kbd>Ctrl+N</kbd> deyərək yeni fayl yarada bilərik.Sadəcə unutmamalıyıq ki,typescript tipli faylımızın fayl sonluğu **.ts** ilə bitməlidir.
Fayla aşağıdakı kodları yazıb yadda saxlayırıq(firstfile.ts).

```html
    let a=5;
    let b=6;
    console.log(`${a}+${b}=${a+b}`);
```

Sonda <kbd>Ctrl+Shift+'</kbd> qısa yolundan istifadə edərək açılan terminalda aşağıdakı kod sətrini yazın icra edirik.(faylın adına uyğun olaraq)  

```html
   tsc firstfile.ts
```

Faylların siyahısına baxdıqda **firstfile.js** faylı yarandığını görəcəyik.Typescript faylını hər dəyişdirdiyimizdə yenidən yuxarıdakı komandanı icra etməliyik.Daimi olaraq yazdığımız typescript faylının icra edilməsini istətiriksə onda aşağıdakı koddakı kimi *-watch* parametrini istifadə edərək həmin komandanı icra etməliyik.

```html
   tsc firstfile.ts -watch
```