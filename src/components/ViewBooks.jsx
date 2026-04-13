import React from 'react'
import { Edit2, Trash2, Book } from 'lucide-react'

const ViewBooks = ({ list, deleteBook, handleEdit }) => {
  return (
    <div className="min-vh-100 bg-black py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="mb-4">
              <h2 className="fw-bold text-white mb-1">Books Collection</h2>
              <p className="text-secondary mb-0">
                {list?.length > 0 ? `${list.length} book${list.length > 1 ? 's' : ''} in your collection` : 'No books yet'}
              </p>
            </div>

            {list?.length === 0 ? (
              <div className="card bg-dark text-light border-0 shadow-lg" style={{ borderRadius: '12px' }}>
                <div className="card-body text-center py-5">
                  <Book size={64} className="text-secondary mb-3" />
                  <h4 className="text-white mb-2">No Books Yet</h4>
                  <p className="text-secondary">Add your first book to get started</p>
                </div>
              </div>
            ) : (
              <div className="card bg-dark text-light border-0 shadow-lg" style={{ borderRadius: '12px' }}>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-dark table-hover mb-0">
                      <thead>
                        <tr style={{ borderBottom: '1px solid #374151' }}>
                          <th className="text-secondary fw-semibold" style={{ padding: '16px 20px' }}>#</th>
                          <th className="text-secondary fw-semibold" style={{ padding: '16px 20px' }}>Title</th>
                          <th className="text-secondary fw-semibold" style={{ padding: '16px 20px' }}>Author</th>
                          <th className="text-secondary fw-semibold" style={{ padding: '16px 20px' }}>Price</th>
                          <th className="text-secondary fw-semibold text-end" style={{ padding: '16px 20px' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {list?.map((book, index) => {
                          const { title, author, price, id } = book
                          return (
                            <tr key={id} style={{ borderBottom: '1px solid #1f2937' }}>
                              <td className="text-secondary" style={{ padding: '16px 20px' }}>{index + 1}</td>
                              <td className="text-white fw-semibold" style={{ padding: '16px 20px' }}>{title}</td>
                              <td className="text-light" style={{ padding: '16px 20px' }}>{author}</td>
                              <td className="text-white" style={{ padding: '16px 20px' }}>₹{price}</td>
                              <td className="text-end" style={{ padding: '16px 20px' }}>
                                <button
                                  onClick={() => handleEdit(id)}
                                  className="btn btn-sm btn-outline-light me-2 d-inline-flex align-items-center gap-1"
                                  style={{ borderRadius: '6px', padding: '6px 12px' }}
                                >
                                  <Edit2 size={14} />
                                  Edit
                                </button>
                                <button
                                  onClick={() => {
                                    if (window.confirm('Are you sure you want to delete this book?')) {
                                      deleteBook(id)
                                    }
                                  }}
                                  className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center gap-1"
                                  style={{ borderRadius: '6px', padding: '6px 12px' }}
                                >
                                  <Trash2 size={14} />
                                  Delete
                                </button>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBooks