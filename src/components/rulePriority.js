import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const RulePriority = ({ rules, setRules }) => {
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedRules = Array.from(rules);
    const [movedRule] = reorderedRules.splice(result.source.index, 1);
    reorderedRules.splice(result.destination.index, 0, movedRule);

    setRules(reorderedRules.map((rule, idx) => ({
      ...rule,
      priority: idx + 1
    })));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="rulesDroppable">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-2 bg-gray-50 p-4 rounded-lg shadow"
          >
            {rules.sort((a, b) => a.priority - b.priority).map((rule, idx) => (
              <Draggable key={rule.key} draggableId={rule.key.toString()} index={idx}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`flex items-center bg-white p-3 rounded shadow-sm ${
                      snapshot.isDragging ? 'bg-green-100' : ''
                    }`}
                  >
                    <span className="mr-3 cursor-grab text-xl">☰</span>
                    <span className="font-semibold">
                      {rule.priority}. {rule.name}
                    </span>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default RulePriority;