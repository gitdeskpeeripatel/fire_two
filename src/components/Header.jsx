import React from 'react'
import { NavLink } from 'react-router-dom'
import { Plus, BookOpen, Search } from 'lucide-react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary sticky-top shadow">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-3 text-white" to="/">
          MyDiary
        </NavLink>
        
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  isActive 
                    ? "nav-link text-white fw-semibold d-flex align-items-center gap-2" 
                    : "nav-link text-secondary fw-semibold d-flex align-items-center gap-2"
                } 
                to="/"
              >
                <Plus size={18} />
                Add Book
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  isActive 
                    ? "nav-link text-white fw-semibold d-flex align-items-center gap-2" 
                    : "nav-link text-secondary fw-semibold d-flex align-items-center gap-2"
                } 
                to="/view-books"
              >
                <BookOpen size={18} />
                View Books
              </NavLink>
            </li>
          </ul>
          
          <div className="d-flex position-relative">
            <Search className="position-absolute text-secondary" size={18} style={{ left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              className="form-control bg-dark text-light border-secondary ps-5"
              type="search"
              placeholder="Search books..."
              style={{ paddingLeft: '2.5rem' }}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header