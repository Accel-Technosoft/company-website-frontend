import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Filter, Search, ShoppingCart, ArrowLeft, CheckCircle, Star, Package, Truck, Shield } from 'lucide-react';
import { products } from '../data';
import type { ProductCategory } from '../types';

const ProductsPage = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(
    category as ProductCategory || 'all'
  );

  // Get all unique categories
  const categories: { value: ProductCategory | 'all'; label: string }[] = [
    { value: 'all', label: 'All Products' },
    { value: 'laptops', label: 'Laptops' },
    { value: 'desktops', label: 'Desktops' },
    { value: 'servers', label: 'Servers' },
    { value: 'networking', label: 'Networking' },
    { value: 'printers', label: 'Printers' },
    { value: 'ups', label: 'UPS Systems' },
    { value: 'accessories', label: 'Accessories' }
  ];

  // Filter products based on category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // If category param is provided and it's a specific product, show product detail
  if (category && !categories.find(cat => cat.value === category)) {
    const product = products.find(p => p.slug === category);
    
    if (!product) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-secondary-900">Product Not Found</h1>
            <p className="text-secondary-600">The product you're looking for doesn't exist.</p>
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <section className="bg-secondary-50 py-8">
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm text-secondary-600">
              <Link to="/" className="hover:text-primary-600">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-primary-600">Products</Link>
              <span>/</span>
              <Link to={`/products/${product.category}`} className="hover:text-primary-600 capitalize">
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-secondary-900">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Hero */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium capitalize">
                      {product.category}
                    </span>
                    <span className="text-secondary-600">SKU: {product.sku}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.stockStatus === 'in-stock' ? 'bg-green-100 text-green-700' :
                      product.stockStatus === 'low-stock' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {product.stockStatus === 'in-stock' ? 'In Stock' :
                       product.stockStatus === 'low-stock' ? 'Low Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  
                  <h1 className="text-4xl font-bold text-secondary-900">{product.name}</h1>
                  
                  <p className="text-lg text-secondary-600 leading-relaxed">
                    {product.longDescription}
                  </p>
                </div>
                
                <div className="bg-primary-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-primary-700">Price Range</div>
                    <div className="text-2xl font-bold text-primary-600">{product.priceRange}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary-600" />
                      <span className="text-primary-700">{product.warranty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-primary-600" />
                      <span className="text-primary-700">Free Delivery</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Request Quote
                  </Link>
                  <Link to="/products" className="btn-outline inline-flex items-center justify-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    All Products
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-6">Product Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                      <span className="text-secondary-600">Manufacturer</span>
                      <span className="font-medium text-secondary-900">{product.manufacturer}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                      <span className="text-secondary-600">Category</span>
                      <span className="font-medium text-secondary-900 capitalize">{product.category}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                      <span className="text-secondary-600">Warranty</span>
                      <span className="font-medium text-secondary-900">{product.warranty}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-secondary-600">Stock Status</span>
                      <span className={`font-medium ${
                        product.stockStatus === 'in-stock' ? 'text-green-600' :
                        product.stockStatus === 'low-stock' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {product.stockStatus === 'in-stock' ? 'Available' :
                         product.stockStatus === 'low-stock' ? 'Limited Stock' : 'Out of Stock'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="section-padding bg-secondary-50">
          <div className="container-custom">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-secondary-900">Technical Specifications</h2>
                <p className="text-secondary-600">
                  Detailed technical specifications and features of this product.
                </p>
              </div>
              
              <div className="bg-white rounded-xl  p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index} className="flex justify-between items-start py-3 border-b border-secondary-100">
                      <span className="text-secondary-600 font-medium">{key}</span>
                      <span className="text-secondary-900 text-right max-w-xs">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary-600">
          <div className="container-custom">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white">Ready to Purchase?</h2>
                <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                  Contact us for pricing, availability, and customization options for {product.name}.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
                  Get Quote & Pricing
                </Link>
                <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                  Installation Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Show products listing page
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900">Our Products</h1>
              <p className="text-xl text-secondary-600 leading-relaxed">
                Discover our comprehensive range of enterprise-grade hardware and technology solutions from leading manufacturers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Request Catalog
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Installation Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-white border-b border-secondary-200">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-secondary-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === cat.value
                        ? 'bg-primary-600 text-white'
                        : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-secondary-600">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.value === selectedCategory)?.label}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">No Products Found</h3>
              <p className="text-secondary-600 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="card group hover:shadow-2xl transition-all duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {product.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.stockStatus === 'in-stock' ? 'bg-green-100 text-green-700' :
                        product.stockStatus === 'low-stock' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {product.stockStatus === 'in-stock' ? 'In Stock' :
                         product.stockStatus === 'low-stock' ? 'Low Stock' : 'Out of Stock'}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-primary-600 font-medium text-sm">
                        {product.manufacturer}
                      </p>
                      <p className="text-secondary-600 leading-relaxed">
                        {product.shortDescription}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-sm font-medium text-secondary-700">Key Features:</div>
                      <ul className="space-y-2">
                        {Object.entries(product.specifications).slice(0, 3).map(([key, value], index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-secondary-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>{key}:</strong> {value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-primary-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-primary-700 mb-1">Price Range</div>
                          <div className="text-lg font-bold text-primary-600">{product.priceRange}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-primary-700">{product.warranty}</div>
                        </div>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/products/${product.slug}`}
                      className="btn-primary w-full inline-flex items-center justify-center gap-2"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-secondary-900">Why Choose Our Products?</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We partner with leading manufacturers to provide enterprise-grade solutions with comprehensive support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">Premium Brands</h3>
              <p className="text-secondary-600">Only the best from Dell, HP, Cisco, and other leading manufacturers</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">Warranty Support</h3>
              <p className="text-secondary-600">Comprehensive warranty and support services for all products</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">Fast Delivery</h3>
              <p className="text-secondary-600">Quick delivery and installation services across Uganda</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">Expert Support</h3>
              <p className="text-secondary-600">Professional installation and ongoing technical support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Need Help Choosing?</h2>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Our experts can help you select the right products for your specific needs and budget.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
                Get Product Consultation
              </Link>
              <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Installation Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
