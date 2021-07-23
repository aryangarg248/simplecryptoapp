import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import "./herocards.css"

const heroCardsArray = [
  {
    id: '1',
    name: 'Amazon',
    thumb: 'https://i.ibb.co/PmKGPgF/amazon.jpg'
  },
  {
    id: '2',
    name: 'Facebook',
    thumb: 'https://i.ibb.co/PWTnRH4/fb.jpg'
  },
  {
    id: '3',
    name: 'Google',
    thumb: 'https://i.ibb.co/61jP4RD/ggl.jpg'
  }

]

function App() {
  const [logo, setLogo] = useState(heroCardsArray);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(logo);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLogo(items);
  }

  return (
    <div className="Container">
      <header className="Container-header">
        <h1 >Hot Stocks right now...</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="logo">
            {(provided) => (
              <ul className="logo" {...provided.droppableProps} ref={provided.innerRef}>
                {logo.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="logo-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                        </li>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
 }
// const DetailsWithRouter = withRouter(HeroCards);

export default App;