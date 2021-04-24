export default function (s: string): Promise<HTMLScriptElement> {
  return new Promise(resolve => {
    let h = 0,
      i,
      c;
    for (i = 0; i < s.length; i++) {
      c = s.charCodeAt(i);
      h = (h << 5) - h + c;
      h |= 0;
    }

    let a: HTMLScriptElement = document.getElementById(String(h))! as HTMLScriptElement;

    if (a) {
      resolve(a)
    } else {
      a = document.createElement("script");
      a.src = s;
      a.id = String(h);
      document.body.append(a);
      resolve(a)
    }
  });
};
