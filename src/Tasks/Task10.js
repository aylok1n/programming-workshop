import React from "react";
import './styles.css'


export default class Task10 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            createForm: false,
            id: '',
            author: '',
            year: '',
            name: '',
            production: '',
            countPages: '',
            inputYear: ''
        }
    }

    componentDidMount() {
        const localBooks = localStorage.getItem('books')
        if (Array.isArray(JSON.parse(localBooks))) this.setState({ books: JSON.parse(localBooks) })
    }

    componentWillUnmount() {
        this.setBooks()
    }

    setBooks = () => {
        localStorage.setItem('books', JSON.stringify(this.state.books))
    }

    create = () => {
        const newBook = {
            id: this.state.id,
            author: this.state.author,
            year: this.state.year,
            name: this.state.name,
            production: this.state.production,
            countPages: this.state.countPages,
        }
        if (Object.values(newBook).some(i => i === '')) {
            alert('Пожалуйста заполните все поля')
        } else {
            this.setState({ books: [...this.state.books, newBook] }, () => {
                this.setBooks()
                this.setState({
                    createForm: false,
                    id: '',
                    author: '',
                    year: '',
                    name: '',
                    production: '',
                    countPages: '',
                })
            })
        }
    }

    render() {
        return (
            <div className='center '>
                sadf
                <h1>Task10</h1>
                <button onClick={() => this.setState({ createForm: !this.state.createForm })} >Создать книгу</button>
                {this.state.createForm
                    ? <div className='between'>
                        <div className='row between'>
                            <label>
                                Регистрационный номер
                                <input value={this.state.id} onChange={e => this.setState({ id: e.target.value })} />
                            </label>
                        </div>
                        <div className='row between'>
                            <label>
                                Автор
                                <input value={this.state.author} onChange={e => this.setState({ author: e.target.value })} />
                            </label>
                        </div>
                        <div className='row between'>
                            <label>
                                Название
                                <input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                            </label>
                        </div>
                        <div className='row between'>
                            <label>
                                Год издания
                                <input value={this.state.year} onChange={e => this.setState({ year: e.target.value })} />
                            </label>
                        </div>
                        <div className='row between'>
                            <label>
                                Издательство
                                <input value={this.state.production} onChange={e => this.setState({ production: e.target.value })} />
                            </label>
                        </div>
                        <div className='row between'>
                            <label>
                                Количество страниц
                                <input value={this.state.countPages} onChange={e => this.setState({ countPages: e.target.value })} />
                            </label>
                        </div>
                        <button onClick={() => this.create()}>Создать</button>
                    </div>
                    : <div style={{ width: 800, display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                        <a href={"data:" + "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state.books))} download="data.json">Скачать книги</a>
                        <div style={{ width: 800, display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ width: 50 }} >Рег номер</span>
                            <span style={{ width: 50 }} >Автор</span>
                            <span style={{ width: 50 }} >Год</span>
                            <span style={{ width: 50 }} >Название</span>
                            <span style={{ width: 50 }} >Издательство</span>
                            <span style={{ width: 50 }} >Страниц</span>
                        </div>
                        {this.state.books.sort((a, b) => a.author.localeCompare(b.author)).map(i => <div style={{ width: 800, marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ width: 50 }} >{i.id}</span>
                            <span style={{ width: 50 }} >{i.author}</span>
                            <span style={{ width: 50 }} >{i.year}</span>
                            <span style={{ width: 50 }} >{i.name}</span>
                            <span style={{ width: 50 }} >{i.production}</span>
                            <span style={{ width: 50 }} >{i.countPages}</span>
                        </div>)}
                    </div>}
            </div>
        )
    }

}