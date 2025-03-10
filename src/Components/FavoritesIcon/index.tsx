interface favoritesIconProps {
  isSelected: boolean;
}
export const FavoritesIcon = ({ isSelected }: favoritesIconProps) => {
  return (
    <svg
      className="fav-icon"
      fill={isSelected ? '#F17900' : 'none'}
      width="74"
      height="74"
      viewBox="0 0 74 74"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M53.2573 57.9032L36.9993 48.4409L20.7412 57.9032V20.0538C20.7412 18.799 21.2306 17.5956 22.1017 16.7083C22.9729 15.821 24.1544 15.3226 25.3864 15.3226H48.6122C49.8442 15.3226 51.0257 15.821 51.8968 16.7083C52.7679 17.5956 53.2573 18.799 53.2573 20.0538V57.9032Z"
        stroke="#F17900"
        strokeWidth="4.69765"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
