const arr = () => {
    const heading = document.createElement("h1");
    heading.innerText = "dharan";
    //<h1> dharan </h1>
    const cont = document.getElementById("container"); //to print the element into the div tag
    cont.appendChild(heading);
}