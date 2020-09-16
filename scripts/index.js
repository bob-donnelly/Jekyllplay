var button = document.getElementById("enter")
var input = document.getElementById("input")
var ul = document.querySelector("ul");

function inputLength () {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    li.addEventListener("click", function (){
        var finished = this.classList.toggle("done");
        var removeButton = docoument.createElement("button");
        var finished = this.classList.add("deletebutton")}
        )
    }
        if (finished){
            removeButton.appendChild(document.createTextNode("remove"));
            removeButton.classList = "deletebutton";}
            removeButton.addEventListener("click", function (){
            li.appendChild(removeButton);

            removeButton.addEventListener("click", function () {
                this.parentElement.remove();
            });
            
            else {
                this.getElementByClassName("deleteButton") [0].remove();
            }
            input.value ="";
            
            })
          
