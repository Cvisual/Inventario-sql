/**
 * Created by Raul Perez on 12/04/2017.
 */
'use strict'

const CategoryModel = require('./coneccion')

function getCategoryById(idCategory, render, printError) {
    CategoryModel.query('SELECT * FROM categorias WHERE idCategoria = ?', idCategory, (error, resultado, fields) => {
        return(error) ? printError(error): render(resultado)
    })
}

function getCategoryByName(name, seleccion, render, printError) {
    CategoryModel.query('SELECT ?? FROM categorias WHERE nombre = ?', [seleccion, name], (error, resultado, fields) => {
        return(error) ? printError(error): render(resultado)
    })
}

function getCategories( render, printError) {
    CategoryModel.query('SELECT * FROM categorias' , (error, resultado, fields) => {
        return(error) ? printError(error): render(resultado)
    })
}

function createCategory(category, render, printError) {
    CategoryModel.query('INSERT INTO categorias SET ?', category, (error, resultado, fields) => {
        return(error) ? printError(error): render()
    })
}

function updateCategory(category, render, printError) {
    CategoryModel.query('UPDATE categorias SET ? WHERE idCategoria = ?', [category,category.idCategoria], (error, resultado, fields) => {
        return(error) ? printError(error): render()
    })
}

module.exports = {
    getCategoryById,
    getCategoryByName,
    getCategories,
    createCategory,
    updateCategory
}