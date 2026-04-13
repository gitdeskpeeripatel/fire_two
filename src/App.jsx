import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AddBook from './components/AddBooks'
import Header from './components/Header'
import ViewBooks from './components/ViewBooks'
import { db } from './firebase/config'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

const App = () => {
  const [book, setBook] = useState({})
  const [list, setList] = useState([])
  const navigate = useNavigate()

  // Create Book in Firestore
  const createBook = async (book) => {
    try {
      await addDoc(collection(db, 'books'), book)
      alert('✅ Book added successfully!')
    } catch (error) {
      alert(' Error: ' + error.message)
    }
  }

  // Get All Books from Firestore
  const getAllBooks = async () => {
    try {
      let newList = []
      let querySnapshot = await getDocs(collection(db, 'books'))
      querySnapshot.forEach((doc) => {
        newList.push({ ...doc.data(), id: doc.id })
      })
      setList(newList)
    } catch (error) {
      alert(' Error: ' + error.message)
    }
  }

  // Delete Book from Firestore
  const deleteBook = async (id) => {
    try {
      await deleteDoc(doc(db, 'books', id))
      alert(' Book deleted successfully!')
      getAllBooks()
    } catch (error) {
      alert(' Error: ' + error.message)
    }
  }

  // Update Book in Firestore
  const updateBook = async (id, book) => {
    try {
      delete book.id
      await updateDoc(doc(db, 'books', id), book)
      alert(' Book updated successfully!')
      getAllBooks()
    } catch (error) {
      alert(' Error: ' + error.message)
    }
  }

  useEffect(() => {
    getAllBooks()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setBook({ ...book, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation
    if (!book.title || !book.author || !book.price) {
      alert(' Please fill all fields!')
      return
    }

    if (book.id) {
      updateBook(book.id, book)
    } else {
      createBook(book)
    }
    
    navigate('/view-books')
    getAllBooks()
    setBook({})
  }

  const handleEdit = (id) => {
    const data = list.find((val) => val.id === id)
    setBook(data)
    navigate('/')
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          index
          element={
            <AddBook
              book={book}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          }
        />
        <Route
          path="/view-books"
          element={
            <ViewBooks
              list={list}
              deleteBook={deleteBook}
              handleEdit={handleEdit}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App