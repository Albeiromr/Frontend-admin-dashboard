import React, {useContext, useRef, useState} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {productPostInitial, productToEditInitial} from '../../context/Admin dashboard context/initialValues';
import validator from 'validator';
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';

const AdminProductForm = () => {

    const {productPost, setProductPost, productToEdit, setProductToEdit} = useContext(AdminDashboardContext);

    const formElement = useRef<HTMLFormElement>(null); 

    const [formMessage, setFormMessage] = useState<string>("All fields are required");


    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {

      e.preventDefault();

      const fetchResponse = await fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/products/product/${productPost.sku}`)
      .then(response => response.json());
      

      if(fetchResponse.length === 0){

        fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/products/`, {
          method: "POST",
          body: JSON.stringify(productPost),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          setFormMessage("Success!!");
          formElement.current?.reset();
          setProductPost(productPostInitial);
          setProductToEdit(productToEditInitial);
        })
        .catch(() => {
          setFormMessage("Connection error, try again");
          formElement.current?.reset();
          setProductPost(productPostInitial);
        });


      }else {

        fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/products/`, {
          method: "PUT",
          body: JSON.stringify(productPost),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          setFormMessage("Success!!");
          formElement.current?.reset();
          setProductPost(productPostInitial);
          setProductToEdit(productToEditInitial);
        })
        .catch(() => {
          setFormMessage("Connection error, try again");
          formElement.current?.reset();
          setProductPost(productPostInitial);
        });
      }
    };
    

    //validating product desciption textarea value
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (validator.isLength(e.target.value, { min: 115, max: 130 })) {
        setProductPost({ ...productPost, [e.target.name]: e.target.value });
        e.target.style.border = "1px #D1D1D1 solid"
      } else {
        setProductPost({ ...productPost, [e.target.name]: "" });
        e.target.style.border = "2px #E5704B solid"
      }
      setFormMessage("All fields are required");
    };

    //validating product SKU
    const handleSkuChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (
        !validator.isNumeric(e.target.value) &&
        validator.isLength(e.target.value, { min: 11, max: 11 }) &&
        !validator.isAlpha(e.target.value)
      ) {
        setProductPost({ ...productPost, [e.target.name]: e.target.value });
        e.target.style.border = "1px #D1D1D1 solid";
      } else {
        setProductPost({ ...productPost, [e.target.name]: "" });
        e.target.style.border = "2px #E5704B solid";
      }
      setFormMessage("All fields are required");
    };

    //focus select inputs when those have an option already selected
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setProductPost({ ...productPost, [e.target.name]: e.target.value });
      e.target.style.border = "1px #D1D1D1 solid";
      setFormMessage("All fields are required");
    };

    //validating product name
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (validator.isLength(e.target.value, { min: 9, max: 13 })) {
        setProductPost({ ...productPost, [e.target.name]: e.target.value });
        e.target.style.border = "1px #D1D1D1 solid";
      } else {
        setProductPost({ ...productPost, [e.target.name]: "" });
        e.target.style.border = "2px #E5704B solid";
      }
      setFormMessage("All fields are required");
    };

    //validating product stock
    const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (validator.isInt(e.target.value, { min: 1, max: 1000 })) {
        setProductPost({ ...productPost, [e.target.name]: e.target.value });
        e.target.style.border = "1px #D1D1D1 solid";
      } else {
        setProductPost({ ...productPost, [e.target.name]: "" });
        e.target.style.border = "2px #E5704B solid";
      }
      setFormMessage("All fields are required");
    };

    //validating product rate
    const handleRateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (validator.isInt(e.target.value, { min: 4, max: 5 })) {
          setProductPost({ ...productPost, [e.target.name]: e.target.value });
          e.target.style.border = "1px #D1D1D1 solid";
        } else {
          setProductPost({ ...productPost, [e.target.name]: "" });
          e.target.style.border = "2px #E5704B solid";
        }
        setFormMessage("All fields are required");
      };

    //validating product price
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (validator.isDecimal(e.target.value, {force_decimal: true, decimal_digits: '1,2'})) {
        setProductPost({ ...productPost, [e.target.name]: e.target.value});
        e.target.style.border = "1px #D1D1D1 solid";
      } else {
        setProductPost({ ...productPost, [e.target.name]: "" });
        e.target.style.border = "2px #E5704B solid";
      }
      setFormMessage("All fields are required");
    };

    //validating product review quantity
    const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (validator.isInt(e.target.value, { min: 1, max: 10000 })) {
        setProductPost({ ...productPost, [e.target.name]: e.target.value });
        e.target.style.border = "1px #D1D1D1 solid";
      } else {
        setProductPost({ ...productPost, [e.target.name]: "" });
        e.target.style.border = "2px #E5704B solid";
      }
      setFormMessage("All fields are required");
    };

    //validating product sold quantity
    const handleSoldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (validator.isInt(e.target.value, { min: 1 , max: 1000 })) {
        setProductPost({ ...productPost, [e.target.name]: e.target.value });
        e.target.style.border = "1px #D1D1D1 solid";
      } else {
        setProductPost({ ...productPost, [e.target.name]: "" });
        e.target.style.border = "2px #E5704B solid";
      }
      setFormMessage("All fields are required");
    };

    //validating product image names
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (validator.isLength(e.target.value, { min: 36, max: 36 })) {
        setProductPost({ ...productPost, [e.target.name]: e.target.value });
        e.target.style.border = "1px #D1D1D1 solid";
      } else {
        setProductPost({ ...productPost, [e.target.name]: "" });
        e.target.style.border = "2px #E5704B solid";
      }
      setFormMessage("All fields are required");
    };

    //validating product views quantity
    const handleViewsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (validator.isInt(e.target.value, { min: 1, max: 10000 })) {
        setProductPost({ ...productPost, [e.target.name]: e.target.value });
        e.target.style.border = "1px #D1D1D1 solid";
      } else {
        setProductPost({ ...productPost, [e.target.name]: "" });
        e.target.style.border = "2px #E5704B solid";
      }
      setFormMessage("All fields are required");
    };



    

    return (
        <div className="admin-product-form" >

            <div className="admin-product-form__table-title-bar">
                <p className="admin-product-form__table-title"> Enter The Product Information</p>
            </div>
            <div className="admin-product-form__table-container">

                <form ref={formElement} className="admin-product-form__form" onSubmit={handleSubmit} >

                    <div className="admin-product-form__form-input-container-one">
                        <div className="admin-product-form__product-description">

                            <label className="admin-product-form__lable" htmlFor="productDescription">Product Description</label>

                            <textarea 
                            className="admin-product-form__text-area"
                            name="productDescription"
                            id="productDescription"
                            cols={20} 
                            rows={5}
                            placeholder="Enter product description"
                            onChange={handleDescriptionChange}
                            defaultValue={productToEdit !== productToEditInitial ? productToEdit.productDescription : ""}
                            >
                            </textarea>

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-two">
                        <div className="admin-product-form__product-sku">

                            <label className="admin-product-form__lable" htmlFor="sku">Product SKU</label>

                            {productToEdit === productToEditInitial ?
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="sku"
                            id="sku"
                            placeholder="Enter SKU"
                            onChange={handleSkuChange}
                            />
                            :
                            <input 
                            className="admin-product-form__input--disabled"
                            type="text"
                            name="sku"
                            id="sku"
                            onChange={handleSkuChange}
                            placeholder={productToEdit.sku}
                            disabled
                            />}

                        </div>
                        <div className="admin-product-form__product-type">

                            <label className="admin-product-form__lable" htmlFor="productType">Product Type</label>
                            <select 
                            className="admin-product-form__select"
                            name="productType" 
                            id="productType"
                            onChange={handleSelectChange}>

                              {productToEdit !== productToEditInitial ?
                              <option selected>{productToEdit.productType} &#8964;</option>:
                              <option hidden >Select product family type &#8964;</option>}

                                <option value={"Tshirts & Shirts"}>Tshirts &amp; Shirts</option>
                                <option value="Pants">Pants</option>
                                <option value={"Sneakers & Shoes"}>Sneakers &amp; Shoes</option>
                                <option value="Shorts">Shorts</option>
                                <option value="Jackets">Jackets</option>
                                <option value="Caps">Caps</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-name">

                            <label className="admin-product-form__lable" htmlFor="productName">Product Name</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="productName"
                            id="productName"
                            placeholder="Enter product name"
                            onChange={handleNameChange}
                            defaultValue={productToEdit !== productToEditInitial ? productToEdit.productName : ""}
                            />

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-three">
                        <div className="admin-product-form__product-stock">

                            <label className="admin-product-form__lable" htmlFor="productStock">Stock</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="productStock"
                            id="productStock"
                            placeholder="Enter stock"
                            onChange={handleStockChange}
                            defaultValue={productToEdit !== productToEditInitial ? productToEdit.productStock : ""}
                            />

                        </div>
                        <div className="admin-product-form__product-rate">

                            <label className="admin-product-form__lable" htmlFor="productRate">Rate</label>
                            <select 
                            className="admin-product-form__select"
                            name="productRate" 
                            id="productRate"
                            onChange={handleRateChange}>

                              {productToEdit !== productToEditInitial ?
                              <option selected>{productToEdit.productRate} &#8964;</option>:
                              <option hidden >Select option &#8964;</option>}

                                <option value="5">5</option>
                                <option value="4">4</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-price">

                            <label className="admin-product-form__lable" htmlFor="productPrice">Price</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="productPrice"
                            id="productPrice"
                            placeholder="Enter price"
                            onChange={handlePriceChange}
                            defaultValue={productToEdit !== productToEditInitial ? productToEdit.productPrice : ""}
                            />

                        </div>
                        <div className="admin-product-form__product-old-price">

                            <label className="admin-product-form__lable" htmlFor="productOldPrice">Old Price</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="productOldPrice"
                            id="productOldPrice"
                            placeholder="Enter old price"
                            onChange={handlePriceChange}
                            defaultValue={productToEdit !== productToEditInitial ? productToEdit.productOldPrice : ""}
                            />

                        </div>
                        <div className="admin-product-form__product-review-quantity">

                            <label className="admin-product-form__lable" htmlFor="reviewQuantity">Review Quantity</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="reviewQuantity"
                            id="reviewQuantity"
                            placeholder="Enter review quantity"
                            onChange={handleReviewChange}
                            defaultValue={productToEdit !== productToEditInitial ? productToEdit.reviewQuantity : ""}
                            />

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-four">
                        <div className="admin-product-form__product-sold-quantity">

                            <label className="admin-product-form__lable" htmlFor="soldQuantity">Sold Quantity</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="soldQuantity"
                            id="soldQuantity"
                            placeholder="Enter sold quantity"
                            onChange={handleSoldChange}
                            defaultValue={productToEdit !== productToEditInitial ? productToEdit.soldQuantity : ""}
                            />

                        </div>
                        <div className="admin-product-form__product-main-image">

                            <label className="admin-product-form__lable" htmlFor="productImage">Main Image</label>
                            <input
                            className="admin-product-form__input"
                            type="text" 
                            id="productImage"
                            name="productImage"
                            placeholder="Main image file name"
                            onChange={handleImageChange}
                            defaultValue={productToEdit !== productToEditInitial ? productToEdit.productImage : ""}
                            />

                        </div>
                        <div className="admin-product-form__product-thumbnail">

                            <label className="admin-product-form__lable" htmlFor="productThumbnail">Thumbnail</label>
                            <input
                            className="admin-product-form__input"
                            type="text" 
                            id="productThumbnail"
                            name="productThumbnail"
                            placeholder="Thumbnail image file name"
                            onChange={handleImageChange}
                            defaultValue={productToEdit !== productToEditInitial ? productToEdit.productThumbnail : ""}
                            />

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-five">
                        <div className="admin-product-form__product-size-one">

                            <label className="admin-product-form__lable" htmlFor="sizeOne">Size One</label>
                            <select 
                            className="admin-product-form__select"
                            name="sizeOne" 
                            id="sizeOne"
                            onChange={handleSelectChange}>

                              {productToEdit !== productToEditInitial ?
                              <option selected>{productToEdit.sizeOne} &#8964;</option>:
                              <option hidden >Set size one &#8964;</option>}

                                <option value="false">false</option>
                                <option value="6.5">6.5</option>
                                <option value="7">7</option>
                                <option value="7.5">7.5</option>
                                <option value="8">8</option>
                                <option value="8.5">8.5</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-size-two">

                            <label className="admin-product-form__lable" htmlFor="sizeTwo">Size Two</label>
                            <select 
                            className="admin-product-form__select"
                            name="sizeTwo" 
                            id="sizeTwo"
                            onChange={handleSelectChange}>

                              {productToEdit !== productToEditInitial ?
                              <option selected>{productToEdit.sizeTwo} &#8964;</option>:
                              <option hidden >Set size two &#8964;</option>}

                                <option value="false">false</option>
                                <option value="6.5">6.5</option>
                                <option value="7">7</option>
                                <option value="7.5">7.5</option>
                                <option value="8">8</option>
                                <option value="8.5">8.5</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-size-three">

                            <label className="admin-product-form__lable" htmlFor="sizeThree">Size Three</label>
                            <select 
                            className="admin-product-form__select"
                            name="sizeThree"
                            id="sizeThree"
                            onChange={handleSelectChange}>

                              {productToEdit !== productToEditInitial ?
                              <option selected>{productToEdit.sizeThree} &#8964;</option>:
                              <option hidden >Set size three &#8964;</option>}

                                <option value="false">false</option>
                                <option value="6.5">6.5</option>
                                <option value="7">7</option>
                                <option value="7.5">7.5</option>
                                <option value="8">8</option>
                                <option value="8.5">8.5</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-size-four">

                            <label className="admin-product-form__lable" htmlFor="sizeFour">Size Four</label>
                            <select 
                            className="admin-product-form__select"
                            name="sizeFour" 
                            id="sizeFour"
                            onChange={handleSelectChange}>

                              {productToEdit !== productToEditInitial ?
                              <option selected>{productToEdit.sizeFour} &#8964;</option>:
                              <option hidden >Set size four &#8964;</option>}

                                <option value="false">false</option>
                                <option value="6.5">6.5</option>
                                <option value="7">7</option>
                                <option value="7.5">7.5</option>
                                <option value="8">8</option>
                                <option value="8.5">8.5</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-size-five">

                            <label className="admin-product-form__lable" htmlFor="sizeFive">Size Five</label>
                            <select 
                            className="admin-product-form__select"
                            name="sizeFive" 
                            id="sizeFive"
                            onChange={handleSelectChange}>

                              {productToEdit !== productToEditInitial ?
                              <option selected>{productToEdit.sizeFive} &#8964;</option>:
                              <option hidden >Set size five &#8964;</option>}

                                <option value="false">false</option>
                                <option value="6.5">6.5</option>
                                <option value="7">7</option>
                                <option value="7.5">7.5</option>
                                <option value="8">8</option>
                                <option value="8.5">8.5</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-six">
                        <div className="admin-product-form__product-category-one">

                            <label className="admin-product-form__lable" htmlFor="categoryOne">Category One</label>
                            <select 
                            className="admin-product-form__select"
                            name="categoryOne" 
                            id="categoryOne"
                            onChange={handleSelectChange}>

                              {productToEdit !== productToEditInitial ?
                              <option selected>{productToEdit.categoryOne} &#8964;</option>:
                              <option hidden >Select option &#8964;</option>}

                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-category-two">

                            <label className="admin-product-form__lable" htmlFor="categoryTwo">Category Two</label>
                            <select 
                            className="admin-product-form__select"
                            name="categoryTwo" 
                            id="categoryTwo"
                            onChange={handleSelectChange}>

                              {productToEdit !== productToEditInitial ?
                              <option selected>{productToEdit.categoryTwo} &#8964;</option>:
                              <option hidden >Select option &#8964;</option>}

                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-category-three">

                            <label className="admin-product-form__lable" htmlFor="categoryThree">Category Thee</label>
                            <select 
                            className="admin-product-form__select"
                            name="categoryThree" 
                            id="categoryThree"
                            onChange={handleSelectChange}>

                              {productToEdit !== productToEditInitial ?
                              <option selected>{productToEdit.categoryThree} &#8964;</option>:
                              <option hidden >Select option &#8964;</option>}

                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-category-four">

                            <label className="admin-product-form__lable" htmlFor="categoryFour">Category Four</label>
                            <select 
                            className="admin-product-form__select"
                            name="categoryFour" 
                            id="categoryFour"
                            onChange={handleSelectChange}>

                              {productToEdit !== productToEditInitial ?
                              <option selected>{productToEdit.categoryFour} &#8964;</option>:
                              <option hidden >Select option &#8964;</option>}

                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-category-five">

                            <label className="admin-product-form__lable" htmlFor="categoryFive">Category Five</label>
                            <select 
                            className="admin-product-form__select"
                            name="categoryFive" 
                            id="categoryFive"
                            onChange={handleSelectChange}>

                              {productToEdit !== productToEditInitial ?
                              <option selected>{productToEdit.categoryFive} &#8964;</option>:
                              <option hidden >Select option &#8964;</option>}

                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-seven">
                        <div className="admin-product-form__product-interest-for-you">

                            <label className="admin-product-form__lable" htmlFor="interestForYou">Interest For You</label>
                            <select 
                            className="admin-product-form__select"
                            name="interestForYou" 
                            id="interestForYou"
                            onChange={handleSelectChange}>

                              {productToEdit !== productToEditInitial ?
                              <option selected>{productToEdit.interestForYou} &#8964;</option>:
                              <option hidden >Select option &#8964;</option>}

                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-profit">

                            <label className="admin-product-form__lable" htmlFor="productProfit">Profit</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="productProfit"
                            id="productProfit"
                            placeholder="Enter profit"
                            onChange={handlePriceChange}
                            defaultValue={productToEdit !== productToEditInitial ? productToEdit.productProfit : ""}
                            />

                        </div>
                        <div className="admin-product-form__product-views-quantity">

                            <label className="admin-product-form__lable" htmlFor="productViews">Views Quantity</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="productViews"
                            id="productViews"
                            placeholder="Enter views quantity"
                            onChange={handleViewsChange}
                            defaultValue={productToEdit !== productToEditInitial ? productToEdit.productViews : ""}
                            />

                        </div>
                    </div>

                    {!Object.values(productPost).includes("")?
                    <button className="admin-product-form__submit-button" type="submit">Save Product</button>
                    : <p className={formMessage !== "Success!!" ? "admin-product-form__paragraph" : "admin-product-form__paragraph--success"}>{formMessage}</p> }
                    

                    

                </form>

            </div>

        </div>
    )
};

export default AdminProductForm;