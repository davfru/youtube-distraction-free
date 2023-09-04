window.onload = () => {

    // hide dashboard contents
    const primary = document.getElementById("primary");
    console.log("primary: ", primary);
    if (primary) {
        primary.setAttribute("style", "display: none;");
    }

    // hide right sidebar when watching videos
    const columns = document.getElementById("columns");
    console.log("columns: ", columns);
    if(columns) {
        columns.children[1].setAttribute("style", "display: none;");
    }

    // hide comments section
    const comments = document.getElementById("comments");
    console.log("comments: ", comments);
    if(comments) {
        comments.setAttribute("style", "display: none;");
    }
};