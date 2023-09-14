import React,{useState} from "react"

export default function AddBooks(){
    const [bookId,setId]=useState("");
    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");
    const [price,setPrice]=useState("");
    const [publishDate,setPublishDate]=useState("");
    const [description,setDescription]=useState("");

   return(
        <div className="container">
        <form>
          <div class="form-group">
              <label for="Book ID">author</label>
              <input type="text" class="form-control" id="bookId" placeholder="Enter book id"
              onChange={(e)=>{
                 setId(e.target.value);
              }}/>
           </div>

           <div class="form-group">
              <label for="Title">title</label>
              <input type="text" class="form-control" id="title" placeholder="Enter the title"
              onChange={(e)=>{
                setTitle(e.target.value);
             }}/>
            </div>

           <div class="form-group">
              <label for="Author">author</label>
              <input type="text" class="form-control" id="author" placeholder="Enter the author's name"
              onChange={(e)=>{
                setAuthor(e.target.value);
             }}/>
           </div>

           <div class="form-group">
              <label for="Price">Price</label>
              <input type= "number" class="form-control" id="price" placeholder="Enter price"
              onChange={(e)=>{
                setPrice(e.target.value);
             }}/>
           </div>

           <div class="form-group">
              <label for="Publish Date">Price</label>
              <input type= "date" class="form-control" id="publishDate" placeholder="Enter publish date"
              onChange={(e)=>{
                setPublishDate(e.target.value);
             }}/>
           </div>

           <div class="form-group">
              <label for="Description">description</label>
              <input type= "text" class="form-control" id="description" placeholder="Enter description"
              onChange={(e)=>{
                setDescription(e.target.value);
             }}/>
           </div>
           <button type = "submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    );
}