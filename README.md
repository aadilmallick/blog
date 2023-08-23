# What I learned

## Line clamping

https://github.com/tailwindlabs/tailwindcss-line-clamp

## Removing files from git history

```bash
git rm -r --cached filename
```

## Social share URLS

These are the list of urls with social sharing:

```
https://www.facebook.com/sharer.php?u={url}
https://www.facebook.com/dialog/share?app_id={app_id}&display={page_type}&href={url}&redirect_uri={redirect_url}
https://reddit.com/submit?url={url}&title={title}
https://twitter.com/intent/tweet?url={url}&text={title}&via={user_id}&hashtags={hash_tags}
https://www.linkedin.com/sharing/share-offsite/?url={url}
https://api.whatsapp.com/send?phone={phone_number}&text={title}%20{url}
https://www.tumblr.com/widgets/share/tool?canonicalUrl={url}&title={title}&caption={text}&tags={hash_tags}
http://pinterest.com/pin/create/button/?url={url}
https://www.blogger.com/blog-this.g?u={url}&n={title}&t={text}
https://www.evernote.com/clip.action?url={url}&title={title}
http://www.livejournal.com/update.bml?subject={title}&event={url}
https://getpocket.com/edit?url={url}
https://news.ycombinator.com/submitlink?u={url}&t={title}
https://share.flipboard.com/bookmarklet/popout?v=2&title={title}&url={url}
https://www.google.com/bookmarks/mark?op=edit&bkmk={url}&title={title}&annotation={text}&labels={hash_tags}
http://www.instapaper.com/edit?url={url}&title={title}&description={text}
https://share.diasporafoundation.org/?title={title}&url={url}
http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&summary={text}
http://vk.com/share.php?url={url}&title={title}&comment={text}
https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl={url}
http://service.weibo.com/share/share.php?url={url}&appkey=&title={title}&pic=&ralateUid=
http://www.douban.com/recommend/?name={title}&text={text}&comment={url}&href={url}
http://widget.renren.com/dialog/share?resourceUrl={url}&srcUrl={url}&title={title}&description={text}
https://www.xing.com/spi/shares/new?url={url}
threema://compose?text={url}&id={user_id}
sms:{phone_number}?body={url}{text}
https://web.skype.com/share?url={url}&text={text}
https://lineit.line.me/share/ui?url={url}&text={text}
https://t.me/share/url?url={url}&text={text}
mailto:{email_address}?subject={title}&body={url} {text}
https://mail.google.com/mail/?view=cm&to={email_address}&su={title}&body={url}&bcc={email_address}&cc={email_address}
http://compose.mail.yahoo.com/?to={email_address}&subject={title}&body={url}
```

## Reading time

### Reading time plugin

### Progress bar

```html
<div class="h-[6px] w-0 bg-purple-500" id="reading-time"></div>
```

```javascript
const readingTimeScroll = document.getElementById("reading-time");

let scrollPosition = 0;
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  // get scroll amount
  scrollPosition = scrollTop;
  const readingTime = Math.round(
    (scrollPosition / (scrollHeight - clientHeight)) * 100
  );
  readingTimeScroll.style.width = `${readingTime}%`;
});
```
