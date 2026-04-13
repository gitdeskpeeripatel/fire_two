import React from 'react'
import { Save, RotateCw } from 'lucide-react'

const AddBooks = ({ book, handleSubmit, handleChange }) => {
  return (
    <div className="min-vh-100 bg-black py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6">
            <div className="card bg-dark text-light border-0 shadow-lg" style={{ borderRadius: '12px' }}>
              <div className="card-body p-5">
                <h2 className="fw-bold mb-1 text-white">
                  {book.id ? 'Update Book' : 'Add New Book'}
                </h2>
                <p className="text-secondary mb-4">
                  {book.id ? 'Modify book details below' : 'Fill in the details to add a new book'}
                </p>
                
                <div className="mb-4">
                  <label className="form-label text-white fw-semibold mb-2">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={book.title || ''}
                    onChange={handleChange}
                    className="form-control bg-black text-light border-secondary"
                    placeholder="Enter book title"
                    style={{ padding: '12px 16px', borderRadius: '8px' }}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label text-white fw-semibold mb-2">Author</label>
                  <input
                    type="text"
                    name="author"
                    value={book.author || ''}
                    onChange={handleChange}
                    className="form-control bg-black text-light border-secondary"
                    placeholder="Enter author name"
                    style={{ padding: '12px 16px', borderRadius: '8px' }}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label text-white fw-semibold mb-2">Price</label>
                  <div className="input-group">
                    <span className="input-group-text bg-black text-secondary border-secondary" style={{ borderRadius: '8px 0 0 8px' }}>₹</span>
                    <input
                      type="number"
                      name="price"
                      value={book.price || ''}
                      onChange={handleChange}
                      className="form-control bg-black text-light border-secondary"
                      placeholder="Enter price"
                      style={{ padding: '12px 16px', borderRadius: '0 8px 8px 0' }}
                      required
                    />
                  </div>
                </div>

                <button 
                  onClick={handleSubmit}
                  className="btn btn-light w-100 fw-semibold d-flex align-items-center justify-content-center gap-2"
                  style={{ padding: '12px', borderRadius: '8px' }}
                >
                  {book.id ? (
                    <>
                      <RotateCw size={18} />
                      Update Book
                    </>
                  ) : (
                    <>
                      <Save size={18} />
                      Save Book
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBooks