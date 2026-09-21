fetch('https://www.youtube.com/results?search_query=ui+ux+scrolling+website+showreel+loop')
  .then(r => r.text())
  .then(html => {
    const matches = html.matchAll(/videoId":"([^"]+)"/g);
    for (const match of matches) {
      console.log(match[1]);
      break;
    }
  });
