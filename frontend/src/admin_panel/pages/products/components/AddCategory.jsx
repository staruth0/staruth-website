import { useState } from 'react';
import Header from '../../../commons/Header';
import TextAreaValue from '../../../commons/TextAreaValue';
import TextInputValue from '../../../commons/TextInputValue';
import performFetchPost from '../../../utils/Fetch/PerformFetchPost';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState('');
  const [categoryHeroTitle, setCategoryHeroTitle] = useState('');
  const [categoryHeroDescription, setCategoryHeroDescription] = useState('');
  const [featuredProductName, setFeaturedProductName] = useState('');
  const [categoryOverview, setCategoryOverview] = useState('');
  const [categoryPerformance, setCategoryPerformance] = useState('');
  const [categoryDesign, setCategoryDesign] = useState('');
  const [categoryIntegration, setCategoryIntegration] = useState('');
  const [previewImageFeatured, setPreviewImageFeatured] = useState('');
  const [previewImageHero, setPreviewImageHero] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      categoryName: categoryName,
      heroTitle: categoryHeroTitle,
      heroDescription: categoryHeroDescription,
      featuredProductName: featuredProductName,
      overview: categoryOverview,
      performance: categoryPerformance,
      integration: categoryIntegration,
      design: categoryDesign,
      // featuredImage: previewImageFeatured,
      // heroImage: previewImageHero,
    };
    const url = 'v1/category';

    performFetchPost(url, data);
    navigate('/admin/products/categories');
  };

  const handleFeatureImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewImageFeatured(reader.result);
    };

    if (file && file.type.startsWith('image/')) {
      reader.readAsDataURL(file);
    }
  };
  const handleHeroImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewImageHero(reader.result);
    };

    if (file && file.type.startsWith('image/')) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <Header text="Add Category" />
      <div className="container">
        <form
          action=""
          className="add-category-product"
          onSubmit={handleSubmit}
        >
          <fieldset>
            <h3>Category Info</h3>
            <div className="form-even-columns">
              <TextInputValue
                label="Category Name"
                placeholder="Category Name"
                value={categoryName}
                change={(e) => {
                  setCategoryName(e.target.value);
                }}
              />
              <TextInputValue
                label="Category Hero Title"
                placeholder="Category Hero Title"
                value={categoryHeroTitle}
                change={(e) => {
                  setCategoryHeroTitle(e.target.value);
                }}
              />
              <TextInputValue
                label="Category Hero Description"
                placeholder="Category Hero Description"
                value={categoryHeroDescription}
                change={(e) => {
                  setCategoryHeroDescription(e.target.value);
                }}
              />
              <TextInputValue
                label="Category Featured Product Name"
                placeholder="Category Featured Product Name"
                value={featuredProductName}
                change={(e) => {
                  setFeaturedProductName(e.target.value);
                }}
              />
              <div className="category-images product-images">
                <label className="" htmlFor="category-featured-image">
                  <div className="img">
                    {previewImageFeatured && (
                      <img src={previewImageFeatured} alt="author" />
                    )}
                  </div>
                  <span>Category Featured Image</span>
                  <input
                    type="file"
                    name="category-featured-image"
                    accept="image/*"
                    id="category-featured-image"
                    required
                    onChange={handleFeatureImageChange}
                  />
                </label>
                <label htmlFor="category-hero-image">
                  <div className="img">
                    {previewImageHero && (
                      <img src={previewImageFeatured} alt="author" />
                    )}
                  </div>
                  <span>Category Hero Image</span>
                  <input
                    type="file"
                    name="category-hero-image"
                    accept="image/*"
                    id="category-hero-image"
                    required
                    onChange={handleHeroImageChange}
                  />
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <h3>Category Details</h3>
            <div className="form-even-columns">
              <TextAreaValue
                label="Overview"
                placeholder="Overview"
                value={categoryOverview}
                change={(e) => {
                  setCategoryOverview(e.target.value);
                }}
              />
              <TextAreaValue
                label="Performance"
                placeholder="Performance"
                value={categoryPerformance}
                change={(e) => {
                  setCategoryPerformance(e.target.value);
                }}
              />
              <TextAreaValue
                label="Design"
                placeholder="Design"
                value={categoryDesign}
                change={(e) => {
                  setCategoryDesign(e.target.value);
                }}
              />
              <TextAreaValue
                label="Integration"
                placeholder="Integration"
                value={categoryIntegration}
                change={(e) => {
                  setCategoryIntegration(e.target.value);
                }}
              />
            </div>
          </fieldset>
          <button type="submit" className="btn">
            Add Category
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCategory;
