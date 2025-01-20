import TagButton from './TagButton';
import { useState } from 'react';

interface TagListProps<T extends string> {
  tagList: T[];
  onTagClick: (tag: string) => void;
}

const TagList = <T extends string>({
  tagList,
  onTagClick,
}: TagListProps<T>) => {
  const [selectedTag, setSelectedTag] = useState<string>(tagList[0]);

  return (
    <div
      className="flex flex-row gap-4"
      onClick={() => {
        const eventTarget = event?.target as HTMLElement;
        const tag = eventTarget.textContent as T;
        onTagClick(tag);
      }}
    >
      {tagList.map((tag) => {
        return (
          <TagButton
            key={tag}
            isChecked={tag === selectedTag}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </TagButton>
        );
      })}
    </div>
  );
};

export default TagList;
