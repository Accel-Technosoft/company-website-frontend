import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Tag, ArrowLeft, Search, Filter } from 'lucide-react';
import { blogPosts } from '../data';
import { parseMarkdown } from '../utils/markdownParser';

const blogCategories = [
  "All",
  "Cloud Computing",
  "Cybersecurity", 
  "Digital Transformation",
  "Web Development",
  "Artificial Intelligence",
  "Mobile Development",
  "Data Analytics",
  "DevOps",
  "IT Infrastructure"
];

const BlogPage = () => {
  const { slug } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // If slug is provided, show individual blog post
  if (slug) {
    const post = blogPosts.find(p => p.slug === slug);
    
    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-secondary-900">Post Not Found</h1>
            <p className="text-secondary-600">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
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
              <Link to="/blog" className="hover:text-primary-600">Blog</Link>
              <span>/</span>
              <span className="text-secondary-900">{post.title}</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime} min read
                  </div>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-secondary-600 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/blog" className="btn-outline inline-flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Discuss This Topic
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div 
                className="markdown-content"
                dangerouslySetInnerHTML={{ 
                  __html: parseMarkdown(post.content)
                }}
              />
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="section-padding bg-secondary-50">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="bg-white rounded-xl  p-8">
              <div className="flex gap-6 items-start">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary-600">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900">{post.author}</h3>
                    <p className="text-primary-600 font-medium">Technology Expert at TechSolutions Uganda</p>
                  </div>
                  
                  <p className="text-secondary-700 leading-relaxed">
                    {post.author} is a technology expert at TechSolutions Uganda with extensive experience in helping businesses leverage technology for growth and innovation. They specialize in digital transformation, cloud computing, and emerging technologies.
                  </p>
                  
                  <Link to="/about" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
                    Learn more about our team
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-secondary-900">Related Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts
                  .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <div key={relatedPost.id} className="card group hover:shadow-xl transition-all duration-300">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-secondary-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(relatedPost.publishDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {relatedPost.readTime} min
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        
                        <p className="text-secondary-600 leading-relaxed">
                          {relatedPost.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-secondary-600">By {relatedPost.author}</span>
                          <Link 
                            to={`/blog/${relatedPost.slug}`}
                            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary-600">
          <div className="container-custom">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white">Need Expert Guidance?</h2>
                <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                  Our team of technology experts is ready to help you implement the solutions discussed in this article.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
                  Get Expert Consultation
                </Link>
                <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || 
      post.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase().replace(' ', '')));
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Show blog listing page
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900">Tech Insights Blog</h1>
              <p className="text-xl text-secondary-600 leading-relaxed">
                Stay updated with the latest technology trends, best practices, and insights from our experts at TechSolutions Uganda.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Subscribe to Updates
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Our Services
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
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-secondary-600" />
              <div className="flex flex-wrap gap-2">
                {blogCategories.slice(0, 6).map((category: string) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-secondary-600">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && !searchTerm && selectedCategory === 'All' && (
        <section className="section-padding bg-secondary-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-900">Featured Article</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="card group hover:shadow-2xl transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-sm text-secondary-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(filteredPosts[0].publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {filteredPosts[0].readTime} min read
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                      {filteredPosts[0].title}
                    </h3>
                    
                    <p className="text-secondary-600 leading-relaxed">
                      {filteredPosts[0].excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-secondary-600">By {filteredPosts[0].author}</span>
                      <Link 
                        to={`/blog/${filteredPosts[0].slug}`}
                        className="btn-primary inline-flex items-center gap-2"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-primary-100 rounded-xl p-8 text-center">
                    <div className="space-y-4">
                      <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto">
                        <Tag className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-secondary-900">Featured Topic</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {filteredPosts[0].tags.slice(0, 3).map((tag, index) => (
                          <span 
                            key={index}
                            className="bg-white text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-secondary-400" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">No Articles Found</h3>
              <p className="text-secondary-600 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(selectedCategory === 'All' && !searchTerm ? 1 : 0).map((post) => (
                <div key={post.id} className="card group hover:shadow-xl transition-all duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between text-sm text-secondary-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime} min
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-secondary-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span 
                            key={index}
                            className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-secondary-600">By {post.author}</span>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="btn-primary inline-flex items-center gap-2"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-secondary-900">Stay Updated</h2>
              <p className="text-secondary-600">
                Subscribe to our newsletter to receive the latest technology insights and updates directly in your inbox.
              </p>
            </div>
            
            <div className="bg-white rounded-xl  p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
                <Link to="/contact" className="btn-primary whitespace-nowrap">
                  Subscribe Now
                </Link>
              </div>
              <p className="text-xs text-secondary-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Ready to Transform Your Business?</h2>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Let our experts help you implement the technologies and strategies discussed in our blog.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
                Get Free Consultation
              </Link>
              <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
