function render_gh_markdown() {
    let elements = document.querySelectorAll(".github-markdown");
    elements.forEach((el)=>{
        let plaintext = el.innerHTML;
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if (xhr.status == 200 && xhr.readyState == 4) {
                el.innerHTML = xhr.responseText;
            }
        }
        xhr.open("POST", "https://api.github.com/markdown");
        xhr.send(
            JSON.stringify(
                {
                    text: plaintext,
                    mode: "gfm"
                }
            )
        );
    });
}
var __github_markdown_window_onload_function_backup = window.onload;
window.onload = (e)=>{
    if (__github_markdown_window_onload_function_backup != null) {
        __github_markdown_window_onload_function_backup(e);
    }
    render_gh_markdown();
};
